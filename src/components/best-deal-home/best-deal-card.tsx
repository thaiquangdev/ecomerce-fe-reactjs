import React from "react";
import { Link } from "react-router-dom";

interface BestDealCartProps {
  title: string;
  description: string;
  img: string;
}

const BestDealCart: React.FC<BestDealCartProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <div className="bg-[#f7f7f7] mb-[25px] rounded-md">
      <div className="p-[40px]">
        <div className="mb-7">
          <h3 className="text-lg leading-5 font-bold mb-4">{title}</h3>
          <p className="text-sm font-light leading-4 mb-3">{description}</p>
          <Link to="" className="text-md font-semibold text-[#5092f7] pb-1">
            Shop Now
          </Link>
        </div>
        <img src={img} alt="" className="h-[210px] w-[210px]" />
      </div>
    </div>
  );
};

export default BestDealCart;
