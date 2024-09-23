import { Link } from "react-router-dom";
import ProductCard from "../product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // For navigation buttons
import "swiper/css/pagination"; // For dot pagination
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper's modules

const BestTopAreaHome = () => {
  return (
    <div className="max-w-xl mx-auto py-[60px]">
      <div className="flex flex-col px-4 lg:px-0 lg:flex-row">
        {/* Best Seller Section */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-[12px] mb-8 md:mb-0">
          <div className="mb-[38px] flex items-center justify-between">
            <h3 className="text-lg font-semibold">Best Seller</h3>
            <Link to="" className="text-md text-[#5092f7]">
              See All Products
            </Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={2} // Show 1 product at a time
            navigation={true} // Show next/prev buttons
            pagination={{ clickable: true }} // Show dots below
            modules={[Navigation, Pagination]} // Use both modules
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Section */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-[12px]">
          <div className="mb-[38px] flex items-center justify-between">
            <h3 className="text-lg font-semibold">Top Rated</h3>
            <Link to="" className="text-md text-[#5092f7]">
              See All Products
            </Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestTopAreaHome;
