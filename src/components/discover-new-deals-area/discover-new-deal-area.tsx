import discover from "../../assets/images/discover.png";
import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";
import ProductCard from "../product-card";

const { IoIosStar, FaCheck } = icons;

const DiscoverNewDealsArea = () => {
  return (
    <div className="max-w-xl mx-auto pb-[60px]">
      <div className="flex flex-col md:flex-row px-4 md:px-0">
        {/* Left section */}
        <div className="w-full md:w-2/5 mb-4 md:mb-0 mr-0 md:mr-[10px] bg-[#feefef] rounded-md">
          <div className="px-[30px] py-[60px] flex flex-col items-center">
            <h3 className="mb-[20px] text-lg font-semibold">
              Discover New Deals!
            </h3>
            <span className="font-thin text-md pb-[10px]">
              End of the offer
            </span>
            <div className="mb-[50px]">
              <ul className="flex items-center gap-2">
                <li className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#ff4951] text-white font-bold text-md">
                  465
                </li>
                <li className="font-bold text-md">:</li>
                <li className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#ff4951] text-white font-bold text-md">
                  3
                </li>
                <li className="font-bold text-md">:</li>
                <li className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#ff4951] text-white font-bold text-md">
                  1
                </li>
                <li className="font-bold text-md">:</li>
                <li className="w-[40px] h-[40px] flex items-center justify-center rounded-md bg-[#ff4951] text-white font-bold text-md">
                  48
                </li>
              </ul>
            </div>
            <img src={discover} alt="" className="mb-[30px]" />
            <div className="max-w-[345px] mx-auto ">
              <Link
                to=""
                className="text-lg font-normal text-center block mb-[15px]"
              >
                Apple 2023 iMac All-in-One Desktop Computer with M3 chip
              </Link>
              <div className="flex items-center justify-center gap-1 text-sm text-[#fdc010] mb-5">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <span className="text-black">(12 reviews)</span>
              </div>
              <p className="flex items-center justify-center gap-1 mb-[25px]">
                $1.699 <del className="font-thin">$1.899</del>
              </p>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-[#ff4b55]">620 Sold</span>
                <span className="flex items-center gap-1 text-[#518a1b]">
                  <FaCheck /> 150 In Stock
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-3/5">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNewDealsArea;
