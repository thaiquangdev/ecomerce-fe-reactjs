import { Link } from "react-router-dom";
import BestDealCart from "./best-deal-card";
import { bestDeal } from "../../utils/data";

const BestDealHome = () => {
  return (
    <div className="max-w-xl mx-auto pt-[62px] pb-[35px]">
      <div className="mb-[38px] flex items-center justify-between">
        <h3 className="text-lg font-semibold">Today's Best Deals</h3>
        <Link to="" className="text-md text-[#5092f7]">
          See All Deals
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestDeal.map((item, index) => (
          <BestDealCart
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default BestDealHome;
