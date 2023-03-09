import React from "react";
import bgvouch from "../assets/bgvouch.png";

const VoucherCard = () => {
  return (
    <div className="w-[380px] h-[80px] text-white">
      <div className="flex flex-col items-center justify-center">
        <h4>Diskon sewa lapangan futsal</h4>
        <h1>50%</h1>
        <p>Berlaku hingga jam 17.00</p>
      </div>
    </div>
  );
};

export default VoucherCard;
