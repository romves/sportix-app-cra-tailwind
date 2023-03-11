import React from "react";
import DiscountCard from "../components/DiscountCard";

const DiscountSection = () => {
  return (
    <div className="h-[700px] bg-primary-50 ">
      <div className="pt-8 px-20">
        <h1 className="text-primary-500 h1-med leading-10">Hari ini</h1>
        <h2 className="h3-med ">Ada diskon di lapangan ini!</h2>
        <p className="beranda-lg-transp">Pesan sekarang dan nikmati diskonnya</p>
      </div>
        <div className="my-4 mx-20 flex overflow-x-scroll">
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
          <DiscountCard />
      </div>
      <div className="text-end px-8">
      </div>
    </div>
  );
};

export default DiscountSection;
