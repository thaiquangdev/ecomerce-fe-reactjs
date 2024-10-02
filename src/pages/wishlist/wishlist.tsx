import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";
import Input from "../../components/input";
import Button from "../../components/button";

const { TiMinus, TiPlus, FaRegTrashAlt } = icons;

const Wishlist = () => {
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
            <tr>
              <td className="border px-4 py-2">
                <Link to="/product/slug">
                  <img src="" alt="" className="w-20 h-20 object-cover" />
                </Link>
              </td>
              <td className="border px-4 py-2">
                <Link
                  to="/product/slug"
                  className="text-sm font-medium hover:text-blue-500 transition duration-200"
                >
                  Multiplatform Wireless Noise-Cancelling Gaming Headset
                </Link>
              </td>
              <td className="border px-4 py-2">
                <span className="text-sm">$79</span>
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
                <span className="text-sm">$79</span>
              </td>
              <td className="border px-4 py-2">
                <Button
                  title="Add To Cart"
                  classN="px-3 py-2 bg-[#f7931b] text-white font-semibold rounded-md hover:bg-[#e07c14] transition"
                />
              </td>
              <td className="border px-4 py-2">
                <button className="text-[#ff4757] hover:text-red-600 transition">
                  <FaRegTrashAlt size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
