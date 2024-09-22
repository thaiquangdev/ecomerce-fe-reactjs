import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "../product-card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ThisMonthSaleHome = () => {
  return (
    <div className="max-w-xl px-2 sm:px-4 md:px-8 lg:px-16 mx-auto pb-[60px]">
      <div className="mb-[38px] flex items-center justify-between">
        <h3 className="text-lg font-semibold">This Month Sales</h3>
        <Link to="" className="text-md text-[#5092f7]">
          See All Deals
        </Link>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1} /* Số slide hiển thị trên màn hình nhỏ */
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 } /* Điều chỉnh theo độ rộng màn hình */,
        }}
        pagination={{ clickable: true }} /* Hiển thị chấm tròn điều hướng */
        navigation
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
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default ThisMonthSaleHome;
