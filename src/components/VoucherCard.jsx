import React from "react";
import bgvouch from "../assets/bgvouch.png";

const VoucherCard = () => {
  return (
    <div className=" w-[380px] h-[350px] min-w-[380px] rounded-xl mr-8 overflow-x-clip">
      <img src={bgvouch} alt="voucher" className="absolute w-[380px] h-[350px] object-cover rounded-xl"/>
      <div className="absolute text-white flex flex-col items-center w-[380px] h-[350px] py-14">
          <h4 className="h4-med">Diskon sewa lapangan futsal</h4>
          <h1>50%</h1>
          <p className="beranda-lg-norm mt-2">Berlaku hingga jam 17.00</p>
      </div>
      
    </div>
  );
};

export default VoucherCard;
