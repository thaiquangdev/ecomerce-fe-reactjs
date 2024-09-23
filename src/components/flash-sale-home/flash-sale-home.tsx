import { Link } from "react-router-dom";
import ProductCard from "../product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // For navigation buttons
import "swiper/css/pagination"; // For dot pagination
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper's modules

const FlashSaleHome = () => {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Header Flash Sale */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-semibold">Flash Sale</h3>
          <div className="ml-6 md:ml-10 flex items-center gap-2">
            <span className="text-sm sm:text-base">End of the offer</span>
            <div>
              <ul className="flex items-center gap-2">
                <li className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#ff4951] text-white text-sm sm:text-base">
                  465
                </li>
                <li className="font-bold text-sm sm:text-base">:</li>
                <li className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#ff4951] text-white text-sm sm:text-base">
                  3
                </li>
                <li className="font-bold text-sm sm:text-base">:</li>
                <li className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#ff4951] text-white text-sm sm:text-base">
                  1
                </li>
                <li className="font-bold text-sm sm:text-base">:</li>
                <li className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#ff4951] text-white text-sm sm:text-base">
                  48
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="" className="text-sm sm:text-base text-[#5092f7]">
          See All Deals
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={5} // Default for large screens
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens (e.g. phones)
          480: { slidesPerView: 2 }, // Slightly larger phones
          640: { slidesPerView: 2 }, // Tablets
          768: { slidesPerView: 3 }, // Small desktops
          1024: { slidesPerView: 4 }, // Medium desktops
          1280: { slidesPerView: 5 }, // Large desktops
        }}
        modules={[Navigation, Pagination]}
      >
        {/* Slides */}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
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
  );
};

export default FlashSaleHome;
