import React from "react";
import { servicesArea } from "../../utils/data";

const ServicesAreaHome = () => {
  return (
    <div className="pb-8 pt-16 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap md:flex-row">
          {servicesArea.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="flex items-center gap-2">
                <img
                  src={item.img}
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm font-light">{item.descritpion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAreaHome;
