import React from "react";
import ProductsFilterSidebar from "../../components/products-filter-sidebar";
import ProductCard from "../../components/product-card";
import RecentlyViewedProducts from "../../components/recently-viewed-products";

const Products = () => {
  return (
    <div>
      <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <div className="flex flex-col md:flex-row py-[60px]">
          <div className="w-full md:w-[20%]">
            <ProductsFilterSidebar />
          </div>
          <div className="w-full md:w-[80%] md:pl-[24px]">
            <div className="flex items-center justify-between mb-[16px]">
              <span className="text-md font-thin">Showing all 12 items</span>
              <div className="">
                <select name="" id="" className="px-3 py-2 bg-[#f7f7f7]">
                  <option value="">Short By</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <RecentlyViewedProducts />
      </div>
    </div>
  );
};

export default Products;
