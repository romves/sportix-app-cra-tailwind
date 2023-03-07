import React from "react";
import DiscountCard from "../components/DiscountCard";

const DiscountSection = () => {
  return (
    <div className="h-[500px] bg-gradient-to-r from-orange-300 to-white/">
      <div className="text-center pt-8">
        <h3 className="text-orange-600 text-lg font-bold ">Hari ini</h3>
        <h2 className="text-2xl font-bold">Lapangan ini lagi adain diskon!</h2>
      </div>
        <div className="my-4 flex">
          <DiscountCard />
          <DiscountCard />

          
        
      </div>
      <div className="text-end px-8">
        <p className="font-bold text-sm">Geser untuk lihat lebih banyak</p>
      </div>
    </div>
  );
};

export default DiscountSection;
