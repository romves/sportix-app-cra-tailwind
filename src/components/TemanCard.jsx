import React from "react";
import Button from "../components/Button";
import { BsPersonPlus } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import imageteman from "../assets/imageteman.png"

const TemanCard = ({nama, umur, desc, jk}) => {
  return (
    <div className={`drop-shadow-lg rounded-lg bg-white w-[280px] min-w-[280px] mr-8 mb-6`}>
      <img
        className={`rounded-t-lg w-[280px] h-[210px] object-cover`}
        src={imageteman}
        alt=""
      />
      <div className={`flex flex-col justify-between h-[170px] px-5`}>
        <div className="h-[100px]">
          <p className="beranda-md-med">{nama} - {jk == 1 ? "P" : "L"}/{umur}</p>
          <div className="flex items-center beranda-md-norm-trans">
            <SlLocationPin />
            <p className=" mx-1">Malang</p>
          </div>
          <p className="body-sm-med">
            {desc}
          </p>
        </div>
        <div className="flex my-1 items-end text-end justify-end">
          <Button type="button" width="190px" className={'mb-4'}>
            <p className="mx-2">Tambahkan teman</p>
            <BsPersonPlus />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TemanCard