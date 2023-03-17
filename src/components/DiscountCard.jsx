import React from "react";
import Button from "./Button";
import { ImStarFull } from "react-icons/im";
import imagelap from "../assets/imagelap.png";
import { useNavigate } from "react-router-dom";

const DiscountCard = ({ nama, lokasi, harga, setSelectedLapangan, id }) => {
  const navigate = useNavigate(); 
  const handleShowDesc = (id) => {
    setSelectedLapangan(id);
    navigate('/sewa/desc')
  }
  return (
    <div className=" drop-shadow-lg rounded-lg bg-white min-w-[380px] w-[380px] mr-8">
      <img
        className="rounded-t-lg w-[380px] h-[265px] object-cover"
        src={imagelap}
        alt="Foto Lapangan"
      />
      <div className="flex flex-col justify-between h-[200px] px-5 ">
        <div className="h-[100px]">
          <h4 className="h4-med">{`${nama} - ${lokasi}`}</h4>
          <h4 className="h4-med">Rp{harga}/jam</h4>
          <p className="body-text-nor-transp line-through">
            Rp{harga + 20000}/jam
          </p>
        </div>
        <div className="flex flex-col my-3 items-end text-end justify-end">
          <div className="flex text-primary-400 my-2">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </div>
          <Button className={`w-[180px]`} onClick={() => handleShowDesc(id)} type="button" >
            <p>Sewa</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
