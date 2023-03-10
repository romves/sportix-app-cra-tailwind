import React from "react";
import Button from "../components/Button";
import { BsPersonPlus } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import imageteman from "../assets/imageteman.png" 

const PartnerCard = () => {
  return (
    <div className=" drop-shadow-lg rounded-lg bg-white w-[380px] min-w-[380px] mx-4">
      <img
        className="rounded-t-lg w-[380px] h-[265px] object-cover"
        src={imageteman}
        alt=""
      />
      <div className="flex flex-col justify-between h-[200px] px-5 ">
        <div className="h-[100px]">
          <h4 className="h4-med">Jessica Chastain - P/29</h4>
          <div className="flex items-center">
            <SlLocationPin />
            <h4 className=" mx-1 beranda-md-med">Malang</h4>
          </div>
          <p className="beranda-md-norm">
            Saya mencari teman untuk berolahraga bowling dan basket
          </p>
        </div>
        <div className="flex my-1 items-end text-end justify-end">
          <Button type="button" width="170px">
            <p className="mx-2">Button i</p>
            <BsPersonPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
