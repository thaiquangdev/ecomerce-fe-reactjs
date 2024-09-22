import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { homeBanner } from "../../utils/data";

const HomeBanner = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="max-w-xl mx-auto">
        <div className="pt-[80px] pb-[80px] px-4 md:pt-[140px] md:pb-[148px] md:ml-auto max-w-[930px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
          >
            {homeBanner.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <span className="inline-block px-3 py-2 rounded-md text-sm font-light text-[#fc4a5f] bg-[#ffebeb] pb-1 mb-2">
                      <item.topTitle.icon /> {/* Hiển thị icon đúng cách */}
                      {item.topTitle.title}
                    </span>
                    <h2 className="text-[28px] md:text-[42px] font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="mb-[20px] md:mb-[35px] text-sm md:text-md">
                      {item.description}
                    </p>
                    <Link
                      to="/shop"
                      className="inline-block px-4 py-3 rounded-full text-white text-sm md:text-md font-semibold bg-[#f7931b] hover:bg-[#ffca2c]"
                    >
                      Shop now
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-auto md:ml-0">
                      <img
                        src={item.img}
                        alt={`Banner ${index + 1}`}
                        className="max-w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
