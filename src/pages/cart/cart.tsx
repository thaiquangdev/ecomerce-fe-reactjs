import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";
import Input from "../../components/input";
import Button from "../../components/button";

const { TiMinus, TiPlus, FaRegTrashAlt } = icons;

const Cart = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-xl bg-white ">
        <table className="table-auto w-full border-collapse text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Unit Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">SubTotal</th>
              <th className="border px-4 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <Link to="/product/slug">
                  <img
                    src=""
                    alt=""
                    className="w-20 h-20 object-cover mx-auto"
                  />
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
                <div className="flex items-center justify-center space-x-2">
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
                <button className="text-[#ff4757] hover:text-red-600 transition">
                  <FaRegTrashAlt size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-[16px]">
          <div className="flex justify-between">
            <div className="w-1/2">
              <div className="flex gap-2 w-full">
                <Input type="text" classN="px-2 py-2 border rounded-md" />
                <Button
                  title="Apply Coupon"
                  classN="px-6 py-2 rounded-md bg-[#f7931b] text-white text-md font-semibold"
                />
              </div>
            </div>
            <div className="w-1/2">
              <Button
                title="Update Price"
                classN="w-full py-2 rounded-md bg-[#f7931b] text-white text-md font-semibold"
              />
            </div>
          </div>
        </div>
        <div className="mt-[60px] max-w-[730px] p-[70px] bg-[#fefaf5]">
          <h3 className="text-xl font-semibold mb-[20px]">Cart Totals</h3>
          <ul className="mb-[20px]">
            <li className="border py-[20px] px-[30px] flex justify-between bg-white">
              <span className="text-sm font-medium">SubTotal</span>
              <span>$595</span>
            </li>
            <li className="border py-[20px] px-[30px] flex justify-between bg-white">
              <span className="text-sm font-medium">Total</span>
              <span>$595</span>
            </li>
          </ul>
          <Link
            to="/checkout"
            className="px-5 py-3 rounded-md text-md text-white font-semibold bg-[#f7931b]"
          >
            Process To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
