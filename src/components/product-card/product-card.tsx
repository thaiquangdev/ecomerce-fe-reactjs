import { Link } from "react-router-dom";
import product1 from "../../assets/images/product-1.png";
import { icons } from "../../utils/icons";

const {
  IoIosStar,
  FaCheck,
  CiDeliveryTruck,
  LiaShoppingCartSolid,
  AiOutlineHeart,
} = icons;

const ProductCard = () => {
  return (
    <div className="border rounded-md p-5">
      <div className="mb-6 text-center relative">
        <Link to="/product/slug" className="flex items-center justify-center">
          <img src={product1} alt="" className="h-[120px] w-[180px]" />
        </Link>
        <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-4">
          {" "}
          <span className="text-white rounded-md px-2 py-1 bg-[#ff4659]">
            -11%
          </span>
          <span className="bg-[#f8f8f8] hover:bg-[#ff4659] hover:text-white cursor-pointer px-2 py-2 rounded-full">
            <AiOutlineHeart size={20} />
          </span>
        </div>
      </div>
      <div>
        <Link to="/product/slug" className="text-sm leading-5 block mb-3">
          Microwave Oven With LED Lighting - 700 Watts, 0.7 cu ft
        </Link>
        <div className="flex items-center gap-1 text-sm text-[#fdc010] mb-5">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <span className="text-black">(12 reviews)</span>
        </div>
        <h3 className="mb-5">
          $399 <del className="font-thin">$450</del>
        </h3>
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-[#ff4b55]">620 Sold</span>
          <span className="flex items-center gap-1 text-[#518a1b]">
            {" "}
            <FaCheck /> 150 In Stock
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm font-light border rounded-full px-1 py-1">
            <CiDeliveryTruck /> Free Delivery
          </span>
          <span className="bg-[#fef8ef] text-[#f7931e] border border-[#fbdebd] px-3 py-3 rounded-full hover:bg-[#f7931e] hover:text-white cursor-pointer">
            <LiaShoppingCartSolid size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
