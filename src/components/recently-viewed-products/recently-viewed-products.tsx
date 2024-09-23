import React from "react";
import ProductCard from "../product-card";

const RecentlyViewedProducts = () => {
  return (
    <div className="border-t pb-[60px]">
      <div className="mb-[27px] pt-[16px]">
        <h3 className="mb-4 text-2xl font-semibold">Recently Viewed</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RecentlyViewedProducts;
