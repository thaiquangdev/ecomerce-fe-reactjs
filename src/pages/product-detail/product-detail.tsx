import React, { useState } from "react";
import macbook from "../../assets/images/macbook.png";
import { icons } from "../../utils/icons";
import Input from "../../components/input";
import Button from "../../components/button";

const { FaCheck, IoIosStar, TiMinus, TiPlus, AiOutlineHeart, IoEyeOutline } =
  icons;

const ProductDetail = () => {
  const [active, setActive] = useState("description");

  return (
    <div className="pt-[30px] pb-[60px] max-w-xl mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div>
            <div className="border p-[57px] rounded-md text-center flex items-start justify-center">
              <img
                src={macbook}
                alt=""
                className="max-w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex gap-3 items-center justify-center">
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-[24px]">
          <span className="inline-flex items-center bg-[#ecf4e4] text-[#538c21] text-sm font-regular rounded-md px-2 py-2">
            <FaCheck className="mr-2" /> In Stock
          </span>
          <h3 className="text-2xl font-semibold mb-[20px]">
            Apple MacBook Pro 16.2" with Liquid Retina XDR Display, M2 Max Chip
            with 12-Core CPU
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#f8c700]">
              <IoIosStar size={20} />
              <IoIosStar size={20} />
              <IoIosStar size={20} />
              <IoIosStar size={20} />
              <IoIosStar size={20} />
            </div>
            <span className="text-md font-light">(5 Reviews)</span>
          </div>
          <h2 className="mt-[15px] pt-[15px] mb-[35px] border-t font-semibold text-xl">
            $399 <del className="text-[#59646b]">$450</del>
          </h2>
          <div className="mb-[10px] flex items-center gap-3">
            <span className="text-md font-light">Capacity:</span>
            <h5 className="text-md font-medium">512GB</h5>
          </div>
          <div className="mb-[16px] flex items-center gap-2">
            <span className="px-4 py-1 rounded-md border cursor-pointer text-sm font-light">
              512GB
            </span>
            <span className="px-4 py-1 rounded-md border cursor-pointer text-sm font-light">
              1TB
            </span>
          </div>
          <div className="mb-[10px] flex items-center gap-3">
            <span className="text-md font-light">Color:</span>
            <h5 className="text-md font-medium">Black</h5>
          </div>
          <div className="mb-[16px] flex items-center gap-2">
            <span className="px-4 py-1 rounded-md border cursor-pointer text-sm font-light">
              Black
            </span>
            <span className="px-4 py-1 rounded-md border cursor-pointer text-sm font-light">
              Gray
            </span>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button className="px-2 py-2 bg-gray-200 hover:bg-gray-300 transition duration-200">
                <TiMinus size={20} />
              </button>
              <Input
                val={0}
                type="number"
                classN="w-10 text-center border-0 focus:ring-0 focus:outline-none appearance-none"
              />
              <button className="px-2 py-2 bg-gray-200 hover:bg-gray-300 transition duration-200">
                <TiPlus size={20} />
              </button>
            </div>
            <Button
              title="Add to Cart"
              classN="px-6 py-2 rounded-full text-sm font-medium bg-[#4c8c17] text-white"
            />
          </div>
          <div className="mb-[12px]">
            <button className="flex items-center gap-2">
              <span className="px-2 py-2 rounded-full bg-[#f7f7f7] text-[#5d6469]">
                <AiOutlineHeart size={15} />
              </span>
              <span className="text-sm font-medium">Add To Wishlist</span>
            </button>
          </div>
          <div className="">
            <button className="flex items-center gap-2">
              <span className="px-2 py-2 rounded-full bg-[#f7f7f7] text-[#5d6469]">
                <IoEyeOutline size={15} />
              </span>
              <span className="text-sm font-medium">
                <span className="text-sm font-light">100 People </span>Are
                viewing the products
              </span>
            </button>
          </div>
          <ul className="mt-[20px] pt-[20px] mb-[20px] border-t">
            <li className="mb-[8px] flex items-center gap-2">
              <span className="text-[#67983e]">
                <FaCheck size={16} />
              </span>
              <span className="text-sm font-light">Free delivery today</span>
            </li>
            <li className="mb-[8px] flex items-center gap-2">
              <span className="text-[#67983e]">
                <FaCheck size={16} />
              </span>
              <span className="text-sm font-light">
                100% money back Guarantee
              </span>
            </li>
            <li className="mb-[8px] flex items-center gap-2">
              <span className="text-[#67983e]">
                <FaCheck size={16} />
              </span>
              <span className="text-sm font-light">
                7 days product return policy
              </span>
            </li>
          </ul>
          <ul className="mt-[20px] pt-[20px] mb-[20px] border-t">
            <li className="mb-[8px] flex items-center gap-2">
              <span className="font-light text-sm">SKU:</span>
              <span className="text-sm font-medium">Free delivery today</span>
            </li>
            <li className="mb-[8px] flex items-center gap-2">
              <span className="font-light text-sm">Category:</span>
              <span className="text-sm  font-medium">
                100% money back Guarantee
              </span>
            </li>
            <li className="mb-[8px] flex items-center gap-2">
              <span className="font-light text-sm">Brand:</span>
              <span className="text-sm  font-medium">
                100% money back Guarantee
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[60px]"></div>
      <div className="flex items-center bg-[#f7f7f7] rounded-md text-[#596369] mb-[30px]">
        <button
          className={`text-md font-medium px-4 py-3 ${
            active === "description" ? "bg-white text-black" : ""
          }`}
          onClick={() => setActive("description")}
        >
          Description
        </button>
        <button
          className={`text-md font-medium px-4 py-3 ${
            active === "specification" ? "bg-white text-black" : ""
          }`}
          onClick={() => setActive("specification")}
        >
          Specification
        </button>
        <button
          className={`text-md font-medium px-4 py-3 ${
            active === "reviews" ? "bg-white text-black" : ""
          }`}
          onClick={() => setActive("reviews")}
        >
          Reviews
        </button>
      </div>

      {active === "description" && (
        <div className="description-section text-gray-700 leading-7 text-lg">
          <p className="mb-4">
            The Apple MacBook Pro 16.2 is a cutting-edge laptop designed to
            deliver exceptional performance and advanced features for
            professionals and creative enthusiasts. With its sleek aluminum body
            and precision engineering, this MacBook Pro represents the pinnacle
            of Apple's laptop technology. Stay connected with a variety of
            ports, including Thunderbolt 3, USB-C, and audio jacks. These
            versatile ports support high-speed data transfer and external device
            connections.
          </p>
        </div>
      )}
      {active === "specification" && (
        <div className="specification-section overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-left">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2 font-bold">Brand</td>
                <td className="border px-4 py-2">Apple</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Category</td>
                <td className="border px-4 py-2">Laptop</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2 font-bold">SKU</td>
                <td className="border px-4 py-2">01</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Price</td>
                <td className="border px-4 py-2">$399</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {active === "reviews" && (
        <div className="">
          <div className="flex flex-wrap">
            {/* Average Rating */}
            <div className="w-full sm:w-1/3">
              <span className="block mb-[24px] text-md font-medium">
                Average Rating
              </span>
              <div className="bg-[#fffbf5] w-[178px] h-[178px] p-[25px] mx-auto">
                <h1 className="mb-[10px] text-5xl font-medium text-center">
                  4.8
                </h1>
                <ul className="flex items-center justify-center gap-1 mb-[10px]">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <IoIosStar />
                    </li>
                  ))}
                </ul>
                <span className="text-center text-md font-light block">
                  5 Rating
                </span>
              </div>
            </div>

            {/* Detailed Rating */}
            <div className="w-full sm:w-2/3">
              <span className="block mb-[24px] text-md font-medium">
                Detailed Rating
              </span>
              <ul>
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <div className="w-[30px] text-center font-medium">
                      {rating}
                    </div>
                    <div className="bg-gray-300 h-[8px] w-full mx-2 rounded-full">
                      <div
                        className="bg-[#538c21] h-full rounded-full"
                        style={{ width: `${rating * 20}%` }} // giả sử mỗi số rating tương ứng với % độ dài thanh
                      ></div>
                    </div>
                    <div className="w-[50px] text-right">{`${
                      rating * 20
                    }%`}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="mb-[25px] text-md font-medium">Client Feedback</h3>
          <ul>
            <li className="mb-[30px]">
              <h4>Maria Cruz</h4>
              <div className="flex items-center gap-2">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                (5.00)
              </div>
              <p className="mt-[20px] text-sm font-light">
                Pellentesque urna varius nunc risus. Nisl sagittis et id ac
                faucibus sollicitudin purus. Mattis a ac purus sapien mauris
                mauris sagittis ut in. Molestie integer luctus nam duis egestas
                placerat amet netus. Est ut ligula aliquam sed.
              </p>
            </li>
            <li className="mb-[30px]">
              <h4>Maria Cruz</h4>
              <div className="flex items-center gap-2">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                (5.00)
              </div>
              <p className="mt-[20px] text-sm font-light">
                Pellentesque urna varius nunc risus. Nisl sagittis et id ac
                faucibus sollicitudin purus. Mattis a ac purus sapien mauris
                mauris sagittis ut in. Molestie integer luctus nam duis egestas
                placerat amet netus. Est ut ligula aliquam sed.
              </p>
            </li>
          </ul>
          <div>
            <h3 className="mb-[17px] text-md font-medium">Write A Review</h3>
            <div className="flex items-center gap-1 mb-[16px]">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="cursor-pointer">
                  <IoIosStar />
                </div>
              ))}
            </div>
            <div>
              <span className="text-sm font-medium mb-[10px]">Summary</span>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Write review summary"
                className="border rounded-md w-full h-auto px-3 py-3 text-sm font-light"
              ></textarea>
            </div>
            <Button
              title="Submit Now"
              classN="px-4 py-2 rounded-full text-white bg-[#f7931b]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
