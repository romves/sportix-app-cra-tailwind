import React from "react";

const DiscountCard = () => {
  return (
    <div className="rounded-xl bg-white w-[380px] mx-1">
      <img
        className="rounded-t-xl w-[400px] h-[220px] object-cover"
        src="https://republikseo.net/wp-content/uploads/2020/04/Genre-Fotografi-Sport-Photography.jpg"
        alt=""
      />
      <div className="flex items-center h-16 px-3 justify-between">
        <div className="">
          <h3 className="font-bold text-lg">Viva futsal - Lowokwaru</h3>
          <p className="font-bold text-xs">Rp60000/jam</p>
          <p className="text-[10px] line-through text-gray-500">Rp80000/jam</p>
        </div>
        <button className="bg-orange-600 text-white text-center rounded-full text-xs px-3 py-1 h-6 end">
          Know more
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
