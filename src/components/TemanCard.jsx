import React from "react";
import Button from "../components/Button";
import { BsPersonPlus } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import imageteman from "../assets/imageteman.png";
import { useNavigate } from "react-router-dom";

const TemanCard = ({ nama, umur, desc, jk, setSelectedTeman, id }) => {
  const navigate = useNavigate();
  const handleGetDesc = () => {
    setSelectedTeman(id)
    navigate('/cariteman/desc')
  }
  return (
    <div
      className={`drop-shadow-lg rounded-lg bg-white w-[280px] min-w-[280px] mr-8 `}
    >
      <div className='cursor-pointer'>
        <img
          className={`rounded-t-lg w-[280px] h-[210px] object-cover`}
          src={imageteman}
          alt=""
        />
        <div className={`flex flex-col justify-between px-5`}>
          <div className="">
            <p className="beranda-md-med mt-4">
              {nama} - {jk == 1 ? "P" : "L"}/{umur}
            </p>
            <div className="flex items-center beranda-md-norm-trans">
              <SlLocationPin />
              <p className=" mx-1">Malang</p>
            </div>
            <p className="body-sm-med">{desc}</p>
          </div>
        </div>
      </div>
      <div className="relative h-[80px] flex my-1 items-end text-end justify-end ">
        <Button width={"180px"} onClick={handleGetDesc} className={" mt-6 mb-4 mx-4"}>
          <p className="mx-2 body-md-semi">Tambahkan teman</p>
          <BsPersonPlus className="text-lg"/>
        </Button>
      </div>
    </div>
  );
};

export default TemanCard;
