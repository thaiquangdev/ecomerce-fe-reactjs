import BestDealHome from "../../components/best-deal-home";
import DiscoverNewDealsArea from "../../components/discover-new-deals-area";
import HomeBanner from "../../components/home-banner";
import ThisMonthSaleHome from "../../components/this-month-sale-home";

const Home = () => {
  return (
    <div className="">
      <HomeBanner />
      <BestDealHome />
      <ThisMonthSaleHome />
      <DiscoverNewDealsArea />
    </div>
  );
};

export default Home;
