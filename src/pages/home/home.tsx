import { useEffect, useState } from "react";
import BestDealHome from "../../components/best-deal-home";
import BestTopAreaHome from "../../components/best-top-area-home";
import DiscoverNewDealsArea from "../../components/discover-new-deals-area";
import FlashSaleHome from "../../components/flash-sale-home";
import HomeBanner from "../../components/home-banner";
import ServicesAreaHome from "../../components/services-area-home";
import SubBannerHome from "../../components/sub-banner-home";
import ThisMonthSaleHome from "../../components/this-month-sale-home";
import { getProductsApi } from "../../services/apis/products";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductsApi();
      if (response.data.success === true) {
        setProducts(response.data.data.products);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="">
      <HomeBanner />
      <BestDealHome />
      <ThisMonthSaleHome products={products} />
      <DiscoverNewDealsArea />
      <SubBannerHome />
      <BestTopAreaHome />
      <FlashSaleHome />
      <ServicesAreaHome />
    </div>
  );
};

export default Home;
