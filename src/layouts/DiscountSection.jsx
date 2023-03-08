import React from "react";
import DiscountCard from "../components/DiscountCard";

const DiscountSection = () => {
  return (
    <div className="h-[500px] bg-primary-200 to-white/">
      <div className="pt-4 px-20">
        <h1 className="text-primary-500">Hari ini</h1>
        <h2 className="h2">Ada diskon di lapangan ini!</h2>
        <p>Pesan sekarang dan nikmati diskonnya</p>
      </div>
        <div className="my-4 flex">
          <DiscountCard />
          <DiscountCard />
      </div>
      <div className="text-end px-8">
      </div>
    </div>
  );
};

export default DiscountSection;
