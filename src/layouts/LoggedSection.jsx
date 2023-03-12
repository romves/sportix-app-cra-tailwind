import React from "react";
import FilterButton from "../components/FilterButton";
import VoucherCard from "../components/VoucherCard";

const LoggedSection = () => {
  return (
    <div className="h-[700px] bg-primary-50 ">
      <div className="pt-8 px-20">
        <h1 className="text-primary-500 h1-med leading-10">
          Khusus buat kamu!
        </h1>
        <h2 className="h3-med mb-2">Kejar diskonnya sebelum kehabisan!</h2>
        <FilterButton />
        <div className="relative my-12 flex overflow-x-scroll ">
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
          <VoucherCard />  
        </div>
      </div>
      <div className="text-end px-8"></div>
    </div>
  );
};

export default LoggedSection;
