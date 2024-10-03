import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";
import { formatCurrencyVND } from "../../utils/helper";
import { createWishlistApi } from "../../services/apis/wishlist";
import toast from "react-hot-toast";

const {
  IoIosStar,
  FaCheck,
  CiDeliveryTruck,
  LiaShoppingCartSolid,
  AiOutlineHeart,
} = icons;

interface ProductProps {
  _id: string; // Thêm id cho sản phẩm
  thumb: string;
  title: string;
  review: number;
  price: number;
  slug: string;
  discount: number;
}

const ProductCard: React.FC<ProductProps> = ({
  _id,
  thumb,
  title,
  review,
  price,
  slug,
  discount,
}) => {
  const handleWishlistClick = async () => {
    const response = await createWishlistApi(_id);
    if (response?.data.success === true) {
      toast.success("Add product to wishlist is successfully");
    }
  };

  return (
    <div className="border rounded-md p-5">
      <div className="mb-6 text-center relative">
        <Link
          to={`/product/${slug}`}
          className="flex items-center justify-center"
        >
          <img src={thumb} alt="" className="h-full w-[180px]" />
        </Link>
        <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-4">
          <span className="text-white rounded-md px-2 py-1 bg-[#ff4659]">
            -{discount}%
          </span>
          <span
            className={`hover:bg-[#ff4659] hover:text-white cursor-pointer px-2 py-2 rounded-full bg-[#f8f8f8]`}
            onClick={handleWishlistClick} // Thêm sự kiện click
          >
            <AiOutlineHeart size={20} />
          </span>
        </div>
      </div>
      <div>
        <Link to={`/product/${slug}`} className="text-sm leading-5 block mb-3">
          {title}
        </Link>
        <div className="flex items-center gap-1 text-sm text-[#fdc010] mb-5">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <span className="text-black">({review} reviews)</span>
        </div>
        <h3 className="mb-5">
          {formatCurrencyVND(price)}{" "}
          <del className="font-thin">
            {discount === 0 ? "" : formatCurrencyVND(price - price * discount)}
          </del>
        </h3>
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-[#ff4b55]">620 Sold</span>
          <span className="flex items-center gap-1 text-[#518a1b]">
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
