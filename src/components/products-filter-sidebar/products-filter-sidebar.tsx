import { useState } from "react";
import Input from "../input";

const ProductsFilterSidebar = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMinPrice(Number(e.target.value));
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMaxPrice(Number(e.target.value));
  return (
    <div className="border-r pr-[24px]">
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
              />
              <label htmlFor="Smartphone-Tablets" className="text-sm pl-2">
                Smartphone & Tablets
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Headphones" />
              <label htmlFor="Headphones" className="text-sm pl-2">
                Headphones
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Smartwatches" />
              <label htmlFor="Smartwatches" className="text-sm pl-2">
                Smartwatches
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="SDrone-Camera" />
              <label htmlFor="Drone-Camera" className="text-sm pl-2">
                Drone & Camera
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Electronics" />
              <label htmlFor="Electronics" className="text-sm pl-2">
                Electronics
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Gaming-Device" />
              <label htmlFor="Gaming-Device" className="text-sm pl-2">
                Gaming Device
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input
                type="checkbox"
                classN="px-2 py-2"
                name="Home-Accesories"
              />
              <label htmlFor="Home-Accesories" className="text-sm pl-2">
                Home Accesories
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-[30px]">
        <h3 className="mb-4 text-2xl font-semibold">Filter By Price</h3>
        <form className="flex items-center justify-between mb-6">
          {/* Min price */}
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

          {/* Max price */}
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

        {/* Price Range Slider */}
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

        {/* Display selected range */}
        <div className="flex justify-between mt-4 text-gray-700">
          <span className="text-lg font-medium">${minPrice}</span>
          <span className="text-lg font-medium">${maxPrice}</span>
        </div>
      </div>
      <div className="mb-[30px]">
        <h3 className="mb-4 text-2xl font-semibold">Filter By Brands</h3>
        <ul>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Apple" />
              <label htmlFor="Apple" className="text-sm pl-2">
                Apple
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Samsung" />
              <label htmlFor="Samsung" className="text-sm pl-2">
                Samsung
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Motorola" />
              <label htmlFor="Motorola" className="text-sm pl-2">
                Motorola
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Microsoft" />
              <label htmlFor="Microsoft" className="text-sm pl-2">
                Microsoft
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Vivo" />
              <label htmlFor="Vivo" className="text-sm pl-2">
                Vivo
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-[30px]">
        <h3 className="mb-4 text-2xl font-semibold">Products Status</h3>
        <ul>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="In-stock" />
              <label htmlFor="In-stock" className="text-sm pl-2">
                In stock
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="On-Sale" />
              <label htmlFor="On-Sale" className="text-sm pl-2">
                On Sale
              </label>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="flex items-center">
              <Input type="checkbox" classN="px-2 py-2" name="Out-Of-Stock" />
              <label htmlFor="Out-Of-Stock" className="text-sm pl-2">
                Out Of Stock
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilterSidebar;
