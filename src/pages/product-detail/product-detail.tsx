import React from "react";
import macbook from "../../assets/images/macbook.png";

const ProductDetail = () => {
  return (
    <div className="pt-[30px] pb-[60px] max-w-xl mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <div>
            <div className="border p-[57px] rounded-md text-center flex items-start justify-center">
              <img
                src={macbook}
                alt=""
                className="max-w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex gap-3 items-center justify-center">
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
              <div className="p-5 rounded-md border">
                <img
                  src={macbook}
                  alt=""
                  className="w-[50px] h-[51px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-[24px]">
          <span className="inline"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
