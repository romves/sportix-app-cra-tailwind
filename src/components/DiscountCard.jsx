import React from "react";
import Button from "./Button";
import { ImStarFull } from "react-icons/im";
import imagelap from "../assets/imagelap.png"

const DiscountCard = () => {
  return (
    <div className=" drop-shadow-lg rounded-lg bg-white min-w-[380px] w-[380px] mx-4">
      <img
        className="rounded-t-lg w-[380px] h-[265px] object-cover"
        src={imagelap}
        alt="Foto Lapangan"
      />
      <div className="flex flex-col justify-between h-[200px] px-5 ">
        <div className="h-[100px]">
          <h4 className="h4-med">Viva futsal - Lowokwaru</h4>
          <h4 className="h4-med">Rp60000/jam</h4>
          <p className="body-text-nor-transp line-through">Rp80000/jam</p>
        </div>
        <div className="flex flex-col my-3 items-end text-end justify-end">
          <div className="flex text-primary-400 my-2">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </div>
          <Button type="button" width="170px">
            <p>Sewa</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
