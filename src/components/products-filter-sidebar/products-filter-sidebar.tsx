import { useEffect, useState } from "react";
import Input from "../input";

interface FilterProps {
  setFilters: (filters: {
    categories?: string[];
    minPrice?: number;
    maxPrice?: number;
    brands?: string[];
    status?: string[];
  }) => void;
}

const ProductsFilterSidebar: React.FC<FilterProps> = ({ setFilters }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [brands, setBrands] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMinPrice(Number(e.target.value));

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMaxPrice(Number(e.target.value));

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    setCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    setBrands((prev) =>
      prev.includes(value)
        ? prev.filter((brand) => brand !== value)
        : [...prev, value]
    );
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    setStatus((prev) =>
      prev.includes(value)
        ? prev.filter((stat) => stat !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    const filters: any = {};

    // Kiểm tra nếu có bộ lọc categories
    if (categories.length > 0) {
      filters.category = categories;
    }

    // Kiểm tra nếu minPrice và maxPrice hợp lệ
    if (minPrice > 0) {
      filters.minPrice = minPrice;
    }
    if (maxPrice < 1000) {
      filters.maxPrice = maxPrice;
    }

    // Kiểm tra nếu có bộ lọc brands
    if (brands.length > 0) {
      filters.brand = brands;
    }

    // Kiểm tra nếu có bộ lọc status
    if (status.length > 0) {
      filters.status = status;
    }

    // Gọi setFilters nếu có bất kỳ bộ lọc nào hợp lệ
    setFilters(filters);
  };

  useEffect(() => {
    applyFilters();
  }, [categories, minPrice, maxPrice, brands, status]);

  return (
    <div className="border-r pr-[24px]">
      {/* Filter by Categories */}
      <div className="mb-[30px]">
        <h3 className="mb-[15px] text-2xl font-semibold">
          Filter By Categories
        </h3>
        <ul>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input
                type="checkbox"
                classN="px-2 py-2"
                name="Smartphone-Tablets"
                onCh={handleCategoryChange}
              />
              <label htmlFor="Smartphone-Tablets" className="text-sm pl-2">
                Smartphone & Tablets
              </label>
            </div>
          </li>
          {/* Thêm các cấu trúc khác cho những category khác */}
        </ul>
      </div>

      {/* Filter by Price */}
      <div className="mb-[30px]">
        <h3 className="mb-4 text-2xl font-semibold">Filter By Price</h3>
        <form className="flex items-center justify-between mb-6">
          <div className="flex flex-col w-1/2 pr-2">
            <label htmlFor="minPrice" className="text-md font-medium mb-2">
              Min price
            </label>
            <Input
              type="number"
              val={minPrice}
              onCh={handleMinPriceChange}
              classN="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col w-1/2 pl-2">
            <label htmlFor="maxPrice" className="text-md font-medium mb-2">
              Max price
            </label>
            <Input
              type="number"
              val={maxPrice}
              onCh={handleMaxPriceChange}
              classN="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <div className="flex items-center justify-between">
          <Input
            type="range"
            min="0"
            max="1000"
            val={minPrice}
            onCh={handleMinPriceChange}
            classN="w-1/2 mr-4 text-[#424242]"
          />
          <Input
            type="range"
            min="0"
            max="1000"
            val={maxPrice}
            onCh={handleMaxPriceChange}
            classN="w-1/2 text-[#424242]"
          />
        </div>
        <div className="flex justify-between mt-4 text-gray-700">
          <span className="text-lg font-medium">${minPrice}</span>
          <span className="text-lg font-medium">${maxPrice}</span>
        </div>
      </div>

      {/* Filter by Brands */}
      <div className="mb-[30px]">
        <h3 className="mb-4 text-2xl font-semibold">Filter By Brands</h3>
        <ul>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input
                type="checkbox"
                classN="px-2 py-2"
                name="Apple"
                onCh={handleBrandChange}
              />
              <label htmlFor="Apple" className="text-sm pl-2">
                Apple
              </label>
            </div>
            <div className="flex items-center">
              <Input
                type="checkbox"
                classN="px-2 py-2"
                name="Samsung"
                onCh={handleBrandChange}
              />
              <label htmlFor="Apple" className="text-sm pl-2">
                Samsung
              </label>
            </div>
          </li>
          {/* Thêm các cấu trúc khác cho những brands khác */}
        </ul>
      </div>

      {/* Products Status */}
      <div className="mb-[30px]">
        <h3 className="mb-4 text-2xl font-semibold">Products Status</h3>
        <ul>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input
                type="checkbox"
                classN="px-2 py-2"
                name="In-stock"
                onCh={handleStatusChange}
              />
              <label htmlFor="In-stock" className="text-sm pl-2">
                In stock
              </label>
            </div>
          </li>
          {/* Thêm các cấu trúc khác cho những status khác */}
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilterSidebar;
