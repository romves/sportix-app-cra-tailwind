import React from "react";
import Button from "./Button";

const DiscountCard = () => {
  return (
    <div className=" drop-shadow-lg rounded-lg bg-white w-[378px] mx-4">
      <img
        className="rounded-t-lg w-[380px] h-[265px] object-cover"
        src="https://republikseo.net/wp-content/uploads/2020/04/Genre-Fotografi-Sport-Photography.jpg"
        alt=""
      />
      <div className="items-center h-[200px] px-5 ">
        <div className="h-[100px]">
          <h4 className="h4-med">Viva futsal - Lowokwaru</h4>
          <h4 className="h4-med">Rp60000/jam</h4>
          <p className="body-text-nor-transp line-through">Rp80000/jam</p>
        </div>
        <div className="text-end ">
          <p>*****</p>
          <Button type='button' width='170px'>Sewa</Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
