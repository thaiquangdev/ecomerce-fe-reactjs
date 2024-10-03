import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";
import Input from "../../components/input";
import Button from "../../components/button";
import {
  deleteWishlistApi,
  getWishlistsApi,
} from "../../services/apis/wishlist";
import { formatCurrencyVND } from "../../utils/helper";
import toast from "react-hot-toast";

const { TiMinus, TiPlus, FaRegTrashAlt } = icons;

const Wishlist = () => {
  const [wishlists, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await getWishlistsApi();
      if (response?.data.success === true) {
        setWishlist(response.data.data);
      }
    };
    fetchWishlist();
  }, []);

  const handleButtonRemoveWishlist = async (wid: string) => {
    const response = await deleteWishlistApi(wid);
    if (response?.data.success === true) {
      toast.success("Delete wishlist successfully");
      // Cập nhật lại danh sách wishlists
      setWishlist((prev) => prev.filter((item) => item._id !== wid));
    } else {
      toast.error("Failed to delete wishlist");
    }
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-xl bg-white shadow-lg">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Product</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Unit Price</th>
              <th className="border px-4 py-2 text-left">Quantity</th>
              <th className="border px-4 py-2 text-left">SubTotal</th>
              <th className="border px-4 py-2 text-left">Add To Cart</th>
              <th className="border px-4 py-2 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlists.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">
                  <Link to={`/product/${item.product.slug}`}>
                    <img
                      src={item.product.thumb.url}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                  </Link>
                </td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="text-sm font-medium hover:text-blue-500 transition duration-200"
                  >
                    {item.product.title}
                  </Link>
                </td>
                <td className="border px-4 py-2">
                  <span className="text-sm">
                    {formatCurrencyVND(item.product.price)}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
                      <TiMinus size={20} />
                    </button>
                    <Input
                      val={0}
                      type="number"
                      classN="w-10 text-center border border-gray-300 rounded-md focus:ring focus:ring-[#f7931b] focus:border-transparent"
                    />
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
                      <TiPlus size={20} />
                    </button>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <span className="text-sm">
                    {formatCurrencyVND(item.product.price)}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  <Button
                    title="Add To Cart"
                    classN="px-3 py-2 bg-[#f7931b] text-white font-semibold rounded-md hover:bg-[#e07c14] transition"
                  />
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="text-[#ff4757] hover:text-red-600 transition"
                    onClick={() => handleButtonRemoveWishlist(item._id)} // Chỉnh sửa tại đây
                  >
                    <FaRegTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
