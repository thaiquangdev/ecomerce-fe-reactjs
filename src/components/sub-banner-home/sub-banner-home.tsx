import { Link } from "react-router-dom";
import subBanner from "../../assets/images/sub-banner.png";
import subBannerIphone from "../../assets/images/sub-banner-iphone.png";

const SubBannerHome = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="relative ">
        {" "}
        {/* Thêm chiều cao cụ thể cho cha */}
        <div className="flex flex-col px-4 md:px-0 md:flex-row relative z-10">
          {" "}
          {/* Z-index để đảm bảo nội dung phía trên */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="py-[60px] px-[80px]">
              <span className="block text-md font-medium text-[#e1397d]">
                Hurry Up!
              </span>
              <h2 className="text-xl font-semibold mb-[10px]">
                Year Ending Sale Up To 70% Off!
              </h2>
              <p className="mb-[25px] text-md font-thin">
                Explore our exclusive sale on cutting-edge electronics devices
              </p>
              <Link
                to=""
                className="px-4 py-3 rounded-full text-white bg-[#f7931e] hover:bg-[#ffc107]"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <img src={subBannerIphone} alt="" className="max-w-full h-full" />
            </div>
          </div>
        </div>
        <img
          src={subBanner}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block" // Đặt hình ảnh phủ toàn bộ thẻ cha
        />
      </div>
    </div>
  );
};

export default SubBannerHome;
