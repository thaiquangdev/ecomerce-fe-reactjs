import React, { useEffect, useState } from "react";
import macbook from "../../assets/images/macbook.png";
import { icons } from "../../utils/icons";
import Input from "../../components/input";
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import { getProductApi } from "../../services/apis/products";
import { formatCurrencyVND } from "../../utils/helper";
import { addToCartApi } from "../../services/apis/cart";
import toast from "react-hot-toast";

const { FaCheck, IoIosStar, TiMinus, TiPlus, AiOutlineHeart, IoEyeOutline } =
  icons;

interface Product {
  _id: string;
  title: string;
  images: { url: string }[];
  price: number;
  discount: number;
  reviews: number;
  description: string;
  brand: string;
  category: string;
  skus: { storage: string; color: string; price: number; sku: string }[];
}

const ProductDetail: React.FC = () => {
  const [active, setActive] = useState<string>("description");
  const [product, setProduct] = useState<Product | null>(null);
  const [image, setImage] = useState<number>(0);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductApi(slug);
      if (response.data.success) {
        setProduct(response.data.data);
        // Thiết lập storage mặc định là cái đầu tiên
        const defaultStorage = response.data.data.skus[0]?.storage;
        setSelectedStorage(defaultStorage);
      }
    };
    fetchProduct();
  }, [slug]);

  const uniqueStorages = Array.from(
    new Set(product?.skus.map((sku) => sku.storage))
  );

  const handleStorageClick = (storage: string) => {
    setSelectedStorage(storage);
    setSelectedColor(null); // Reset màu sắc khi chọn storage mới
    updateSku(storage, null); // Cập nhật SKU khi thay đổi storage
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    if (selectedStorage) {
      updateSku(selectedStorage, color); // Cập nhật SKU khi thay đổi color
    }
  };

  const updateSku = (storage: string | null, color: string | null) => {
    const selectedSku = product?.skus.find(
      (sku) => sku.storage === storage && sku.color === color
    );
    if (selectedSku) {
      setSku(selectedSku.sku); // Cập nhật SKU
    } else {
      setSku(""); // Nếu không tìm thấy, đặt SKU là chuỗi rỗng
    }
  };

  const getColorsForStorage = (storage: string) => {
    const colors = product?.skus
      .filter((sku) => sku.storage === storage)
      .map((sku) => sku.color);

    return colors ? colors : [];
  };

  // Tìm giá sản phẩm dựa vào storage và color đã chọn
  const getCurrentPrice = () => {
    const sku = product?.skus.find(
      (sku) => sku.storage === selectedStorage && sku.color === selectedColor
    );
    return sku ? sku.price : product?.price;
  };

  // Hàm để tăng số lượng
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Hàm để giảm số lượng
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Hàm để xử lý thay đổi từ input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = async () => {
    const price = getCurrentPrice();
    console.log({
      pid: product?._id,
      quantity: quantity,
      storage: selectedStorage,
      color: selectedColor,
      sku: sku,
      price: price,
      discount: product?.discount,
    });
    if (!product?._id || quantity <= 0) {
      toast.error("Chose quantity. Please");
      return;
    }
    const response = await addToCartApi({
      pid: product._id, // Đảm bảo _id không phải là undefined
      quantity: quantity,
      storage: selectedStorage || "", // Giá trị mặc định là chuỗi rỗng
      color: selectedColor || "", // Giá trị mặc định là chuỗi rỗng
      sku: sku || "", // Giá trị mặc định là chuỗi rỗng
      price: price,
      discount: product?.discount || 0, // Giá trị mặc định là 0 nếu discount là undefined
    });
    if (response.data.success === true) {
      toast.success("Add product is success is successfully");
    }
  };

  return (
    <div className="pt-[30px] pb-[60px] max-w-xl mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div>
            <div className="border p-[57px] rounded-md text-center flex items-start justify-center">
              <img
                src={product?.images[image]?.url}
                alt=""
                className="max-w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex gap-3 items-center justify-center">
              {product?.images?.map((item, index) => (
                <div
                  className="p-5 rounded-md border cursor-pointer"
                  key={index}
                  onClick={() => setImage(index)}
                >
                  <img
                    src={item?.url}
                    alt=""
                    className="w-[50px] h-[51px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-[24px]">
          <span className="inline-flex items-center bg-[#ecf4e4] text-[#538c21] text-sm font-regular rounded-md px-2 py-2">
            <FaCheck className="mr-2" /> In Stock
          </span>
          <h3 className="text-2xl font-semibold mb-[20px]">{product?.title}</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#f8c700]">
              <IoIosStar size={20} />
              <IoIosStar size={20} />
              <IoIosStar size={20} />
              <IoIosStar size={20} />
              <IoIosStar size={20} />
            </div>
            <span className="text-md font-light">
              ({product?.reviews} Reviews)
            </span>
          </div>
          <h2 className="mt-[15px] pt-[15px] mb-[35px] border-t font-semibold text-xl">
            {formatCurrencyVND(getCurrentPrice())}{" "}
            <del className="text-[#59646b]">
              {product?.discount
                ? ""
                : formatCurrencyVND(
                    product?.price - product?.price * product?.discount
                  )}
            </del>
          </h2>
          <div className="mb-[10px] flex items-center gap-3">
            <span className="text-md font-light">Capacity:</span>
            <h5 className="text-md font-medium">512GB</h5>
          </div>
          <div className="mb-[16px] flex items-center gap-2">
            {uniqueStorages.map((item, index) => (
              <span
                className="px-4 py-1 rounded-md border cursor-pointer text-sm font-light"
                key={index}
                onClick={() => handleStorageClick(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-[10px] flex items-center gap-3">
            <span className="text-md font-light">Color:</span>
            <h5 className="text-md font-medium">
              {selectedColor || "Select a color"}
            </h5>
          </div>
          <div className="mb-[16px] flex items-center gap-2">
            {selectedStorage &&
              getColorsForStorage(selectedStorage).map((item, index) => (
                <span
                  className="px-4 py-1 rounded-md border cursor-pointer text-sm font-light"
                  key={index}
                  onClick={() => handleColorClick(item)}
                >
                  {item}
                </span>
              ))}
          </div>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={handleDecrease}
                className="px-2 py-2 bg-gray-200 hover:bg-gray-300 transition duration-200"
              >
                <TiMinus size={20} />
              </button>

              {/* Input để hiển thị số lượng */}
              <Input
                val={quantity}
                type="number"
                classN="w-10 text-center border-0 focus:ring-0 focus:outline-none appearance-none"
                onCh={handleInputChange} // Xử lý thay đổi số lượng từ input
              />

              {/* Nút tăng số lượng */}
              <button
                onClick={handleIncrease}
                className="px-2 py-2 bg-gray-200 hover:bg-gray-300 transition duration-200"
              >
                <TiPlus size={20} />
              </button>
            </div>
            <Button
              onCl={handleAddToCart}
              title="Add to Cart"
              classN="px-6 py-2 rounded-full text-sm font-medium bg-[#4c8c17] text-white"
            />
          </div>
          <div className="mb-[12px]">
            <button className="flex items-center gap-2">
              <span className="px-2 py-2 rounded-full bg-[#f7f7f7] text-[#5d6469]">
                <AiOutlineHeart size={15} />
              </span>
              <span className="text-sm font-medium">Add To Wishlist</span>
            </button>
          </div>
          <div className="">
            <button className="flex items-center gap-2">
              <span className="px-2 py-2 rounded-full bg-[#f7f7f7] text-[#5d6469]">
                <IoEyeOutline size={15} />
              </span>
              <span className="text-sm font-medium">
                <span className="text-sm font-light">100 People </span>Are
                viewing the products
              </span>
            </button>
          </div>
          <ul className="mt-[20px] pt-[20px] mb-[20px] border-t">
            <li className="mb-[8px] flex items-center gap-2">
              <span className="text-sm text-gray-500">SKU:</span>
              <span className="font-medium">{sku}</span>
            </li>
            <li className="mb-[8px] flex items-center gap-2">
              <span className="text-sm text-gray-500">Category:</span>
              <span className="font-medium">{product?.category}</span>
            </li>
            <li className="mb-[8px] flex items-center gap-2">
              <span className="text-sm text-gray-500">Tags:</span>
              <span className="font-medium">Laptop, Electronics, PC</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[60px]"></div>
      <div className="flex items-center bg-[#f7f7f7] rounded-md text-[#596369] mb-[30px]">
        <button
          className={`text-md font-medium px-4 py-3 ${
            active === "description" ? "bg-white text-black" : ""
          }`}
          onClick={() => setActive("description")}
        >
          Description
        </button>
        <button
          className={`text-md font-medium px-4 py-3 ${
            active === "specification" ? "bg-white text-black" : ""
          }`}
          onClick={() => setActive("specification")}
        >
          Specification
        </button>
        <button
          className={`text-md font-medium px-4 py-3 ${
            active === "reviews" ? "bg-white text-black" : ""
          }`}
          onClick={() => setActive("reviews")}
        >
          Reviews
        </button>
      </div>
      {active === "description" && (
        <div className="description-section text-gray-700 leading-7 text-lg">
          <p className="mb-4">{product?.description}</p>
        </div>
      )}
      {active === "specification" && (
        <div className="specification-section overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-left">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2 font-bold">Brand</td>
                <td className="border px-4 py-2">{product?.brand}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Category</td>
                <td className="border px-4 py-2">{product?.category}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2 font-bold">SKU</td>
                <td className="border px-4 py-2">{sku}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Price</td>
                <td className="border px-4 py-2">{product?.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {active === "reviews" && (
        <div className="">
          <div className="flex flex-wrap">
            {/* Average Rating */}
            <div className="w-full sm:w-1/3">
              <span className="block mb-[24px] text-md font-medium">
                Average Rating
              </span>
              <div className="bg-[#fffbf5] w-[178px] h-[178px] p-[25px] mx-auto">
                <h1 className="mb-[10px] text-5xl font-medium text-center">
                  4.8
                </h1>
                <ul className="flex items-center justify-center gap-1 mb-[10px]">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <IoIosStar />
                    </li>
                  ))}
                </ul>
                <span className="text-center text-md font-light block">
                  5 Rating
                </span>
              </div>
            </div>

            {/* Detailed Rating */}
            <div className="w-full sm:w-2/3">
              <span className="block mb-[24px] text-md font-medium">
                Detailed Rating
              </span>
              <ul>
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <div className="w-[30px] text-center font-medium">
                      {rating}
                    </div>
                    <div className="bg-gray-300 h-[8px] w-full mx-2 rounded-full">
                      <div
                        className="bg-[#538c21] h-full rounded-full"
                        style={{ width: `${rating * 20}%` }} // giả sử mỗi số rating tương ứng với % độ dài thanh
                      ></div>
                    </div>
                    <div className="w-[50px] text-right">{`${
                      rating * 20
                    }%`}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="mb-[25px] text-md font-medium">Client Feedback</h3>
          <ul>
            <li className="mb-[30px]">
              <h4>Maria Cruz</h4>
              <div className="flex items-center gap-2">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                (5.00)
              </div>
              <p className="mt-[20px] text-sm font-light">
                Pellentesque urna varius nunc risus. Nisl sagittis et id ac
                faucibus sollicitudin purus. Mattis a ac purus sapien mauris
                mauris sagittis ut in. Molestie integer luctus nam duis egestas
                placerat amet netus. Est ut ligula aliquam sed.
              </p>
            </li>
            <li className="mb-[30px]">
              <h4>Maria Cruz</h4>
              <div className="flex items-center gap-2">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                (5.00)
              </div>
              <p className="mt-[20px] text-sm font-light">
                Pellentesque urna varius nunc risus. Nisl sagittis et id ac
                faucibus sollicitudin purus. Mattis a ac purus sapien mauris
                mauris sagittis ut in. Molestie integer luctus nam duis egestas
                placerat amet netus. Est ut ligula aliquam sed.
              </p>
            </li>
          </ul>
          <div>
            <h3 className="mb-[17px] text-md font-medium">Write A Review</h3>
            <div className="flex items-center gap-1 mb-[16px]">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="cursor-pointer">
                  <IoIosStar />
                </div>
              ))}
            </div>
            <div>
              <span className="text-sm font-medium mb-[10px]">Summary</span>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Write review summary"
                className="border rounded-md w-full h-auto px-3 py-3 text-sm font-light"
              ></textarea>
            </div>
            <Button
              title="Submit Now"
              classN="px-4 py-2 rounded-full text-white bg-[#f7931b]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
