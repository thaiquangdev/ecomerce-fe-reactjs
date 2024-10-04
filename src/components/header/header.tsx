import { Link } from "react-router-dom";
import Input from "../input";
import Button from "../button";
import { icons } from "../../utils/icons";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { getProductsApi } from "../../services/apis/products";
import { getAllCartsApi } from "../../services/apis/cart";
import { formatCurrencyVND } from "../../utils/helper";

const {
  LiaShoppingCartSolid,
  AiOutlineHeart,
  RiUser3Line,
  IoIosArrowDown,
  IoLocationOutline,
  MdOutlineLocalPhone,
} = icons;

const Header = () => {
  const token = localStorage.getItem("token");

  const [productsSearch, setProductsSearch] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openCart, setOpenCart] = useState(false);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    const fetchProduct = async () => {
      if (debouncedSearchTerm) {
        const params = `?title=${debouncedSearchTerm}`;
        try {
          const response = await getProductsApi(params);
          console.log("Products found:", response.data.data);
          setProductsSearch(response.data.data.products);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProduct();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getAllCartsApi();
        console.log("Cart:", response.data.data);
        setProductsCart(response.data.data);
      } catch (error) {
        console.error("Error fetching carts:", error);
      }
    };
    fetchCart();
  }, []);

  const totalPrice = productsCart.reduce((sum, item) => {
    return sum + item.totalPrice;
  }, 0);

  return (
    <div className="">
      <div className="xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo và Search */}
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <div className="mr-5">
              <Link to="/" className="text-2xl font-bold">
                LOGO
              </Link>
            </div>
            <div className="flex-grow relative">
              <form action="" className="flex items-center">
                <Input
                  type="text"
                  place="Search for products..."
                  classN="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5092f7] w-full md:w-[300px] lg:w-[400px] xl:w-[500px]" // Thay đổi chiều dài input khi màn hình lớn
                  val={searchTerm}
                  onCh={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                  title="Search"
                  classN="px-5 py-2 bg-[#5092f7] hover:bg-[#0a53be] rounded-r-md text-white text-md font-semibold"
                />
              </form>
              <div className="absolute top-10 bg-white z-10 w-full">
                {productsSearch.map((item, index) => (
                  <div className="flex items-center p-3" key={index}>
                    <img
                      src={item.thumb.url}
                      alt=""
                      className="w-[50px] h-[50px] object-contain"
                    />
                    <p className="ml-[20px] font-semibold text-md">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Menu & Icon */}
          <ul className="flex items-center gap-5">
            {/* Login */}
            <li>
              <Link
                to={`${token ? "/" : "/login"}`}
                className="flex items-center gap-2"
              >
                <span className="px-3 py-3 rounded-full bg-gray-100 hover:bg-[#5092f7] hover:text-white">
                  <RiUser3Line size={24} />
                </span>
                <span className="text-sm hidden md:inline-block font-light">
                  {`${token ? "Hello" : "Login Your"}`} <br />
                  <span className="font-semibold">{`${
                    token ? "Customer" : "Account"
                  }`}</span>
                </span>
              </Link>
            </li>

            {/* Wishlist */}
            <li className="relative">
              <Link to="/wishlist" className="flex items-center gap-2">
                <span className="px-3 py-3 rounded-full bg-gray-100 hover:bg-[#5092f7] hover:text-white">
                  <AiOutlineHeart size={24} />
                </span>
                {/* <span className="absolute top-0 right-[-2px] text-xs font-light px-[5px] py-[2px] rounded-full bg-[#fd9200]">
                  3
                </span> */}
              </Link>
            </li>

            {/* Cart */}
            <li className="relative">
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setOpenCart((prev) => !prev)}
              >
                <span className="px-3 py-3 rounded-full bg-gray-100 hover:bg-[#5092f7] hover:text-white transition-colors duration-200">
                  <LiaShoppingCartSolid size={24} />
                </span>
                {/* <span className="absolute top-0 left-9 text-xs font-light px-[5px] py-[2px] rounded-full bg-[#fd9200]">
      3
    </span> */}
                <span className="text-sm hidden md:inline-block font-light">
                  Your cart <br />
                  <span className="font-semibold">
                    {formatCurrencyVND(totalPrice || 0)}
                  </span>
                </span>
              </span>

              {/* Giỏ hàng */}
              {openCart && (
                <div className="absolute top-12 left-[-180px] w-[300px] bg-white shadow-lg rounded-md z-10">
                  {productsCart.length > 0 ? (
                    <>
                      {productsCart.map((item, index) => (
                        <div
                          className="flex items-center p-3 border-b"
                          key={index}
                        >
                          <img
                            src={item.product.thumb.url}
                            alt={item.product.title}
                            className="w-[50px] h-[50px] object-cover rounded"
                          />
                          <div className="flex flex-col ml-4">
                            <p className="text-sm font-light">
                              {item.product.title}
                            </p>
                            <span className="text-sm font-medium text-gray-800">
                              {formatCurrencyVND(
                                item.discount > 0
                                  ? item.product.price -
                                      item.product.price * item.product.discount
                                  : item.price
                              )}
                            </span>
                          </div>
                        </div>
                      ))}

                      {/* Tổng tiền */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between p-3">
                          <p className="text-md font-medium">Total:</p>
                          <p className="text-sm font-light">
                            {formatCurrencyVND(totalPrice)}
                          </p>
                        </div>
                      </div>

                      {/* Liên kết tới giỏ hàng và thanh toán */}
                      <div className="mt-3 flex justify-between gap-2 p-3">
                        <Link
                          to="/cart"
                          className="text-md font-medium text-white px-3 py-2 bg-[#5092f7] rounded-md hover:bg-[#407fd3] transition-colors duration-200"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="text-md font-medium text-white px-3 py-2 bg-[#f7931b] rounded-md hover:bg-[#e6821b] transition-colors duration-200"
                        >
                          Checkout
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      Your cart is empty.
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Categories và các menu khác */}
        <div className="flex items-center justify-between gap-6 pt-4">
          {/* Categories Dropdown */}
          <div className="relative group">
            <ul>
              <li className="w-[250px] px-5 py-3 bg-[#5092f7] text-white rounded-md cursor-pointer transition-all duration-200 ease-in-out">
                <div className="flex items-center justify-between">
                  <span>Browse Categories</span>
                  <IoIosArrowDown />
                </div>
                {/* Dropdown categories */}
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10 transition-all duration-200 ease-in-out">
                  <li className="px-4 py-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                    SmartPhone & Tablet
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                    Electronics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                    Fashion
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Other navigation links */}
          <div>
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#5092f7] transition-all duration-200 ease-in-out text-gray-700 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#5092f7] transition-all duration-200 ease-in-out text-gray-700 font-medium flex items-center gap-1"
                >
                  <span>Pages</span>
                  <IoIosArrowDown />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#5092f7] transition-all duration-200 ease-in-out text-gray-700 font-medium"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#5092f7] transition-all duration-200 ease-in-out text-gray-700 font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#5092f7] transition-all duration-200 ease-in-out text-gray-700 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hotline và Location */}
          <div className="items-center gap-6 hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/" className="flex items-center gap-2">
                  <span className="px-3 py-3 rounded-full bg-[#ffe2ed] hover:bg-[#e1397d] text-[#e1397d] hover:text-white transition-all duration-200 ease-in-out">
                    <MdOutlineLocalPhone size={24} />
                  </span>
                  <span className="text-sm hidden md:inline-block font-light">
                    Hotline <br />{" "}
                    <span className="font-semibold">(808) 555-0111</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center gap-2">
                  <span className="px-3 py-3 rounded-full bg-gray-100 hover:bg-[#5092f7] hover:text-white transition-all duration-200 ease-in-out">
                    <IoLocationOutline size={24} />
                  </span>
                  <span className="text-sm hidden md:inline-block font-light">
                    Deliver to <br />{" "}
                    <span className="font-semibold">Location</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
