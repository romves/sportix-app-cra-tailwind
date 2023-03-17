import React from "react";
import Button from "../components/Button";
import { BsPersonPlus } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import imageteman from "../assets/imageteman.png" 

const PartnerCard = ({nama, desc, umur, jk, kota}) => {
  return (
    <div className=" drop-shadow-lg rounded-lg bg-white w-[380px] min-w-[380px] mr-8">
      <img
        className="rounded-t-lg w-[380px] h-[265px] object-cover"
        src={imageteman}
        alt=""
      />
      <div className="flex flex-col justify-between h-[200px] px-5 ">
        <div className="h-[100px]">
          <h4 className="h4-med">{nama} - {jk == 1 ? "P" : "L"}/{umur}</h4>
          <div className="flex items-center">
            <SlLocationPin />
            <h4 className=" mx-1 beranda-md-med">{kota}</h4>
          </div>
          <p className="beranda-md-norm">
            {desc}
          </p>
        </div>
        <div className="flex my-1 items-end text-end justify-end">
          <Button type="button" width={"180px"} className={'mb-4'}>
            <p className="mx-2 body-md-semi">Tambahkan teman</p>
            <BsPersonPlus className="text-lg"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
