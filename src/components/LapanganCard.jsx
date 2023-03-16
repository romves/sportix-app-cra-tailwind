import React from "react";
import { ImStarFull } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import lapcard from "../assets/lapcard.png";
import Button from "./Button";

const LapanganCard = ({nama, lokasi, jamBuka, jamTutup, harga, setSelectedLapangan, id}) => {
  const navigate = useNavigate();
  
  const handleGetDesc = () => {
    setSelectedLapangan(id)
    navigate('/sewa/desc')
  }
  return (
    <div className="flex w-[1150px] h-[240px] rounded-xl mb-4 shadow-md">
      <img src={lapcard} alt="" className="object-cover rounded-l-xl" />
      <div className="w-[650px] px-8 py-2 rounded-r-xl">
        <h3>{nama}</h3>
        <div className="flex items-center">
          <SlLocationPin className="mr-2"/>
          <p className="body-text-med">{lokasi}</p>
        </div>
        <p className="body-text-med"> Jumlah lapangan: 2</p>
        <p className="body-text-nor">
          Fasilitas: Parkir, Kamar Ganti, Toilet, Kantin, AC, Wifi
        </p>
        <p className="body-text-nor-transp">
          {`Buka setiap hari dari jam ${jamBuka < 10 ? "0" + jamBuka : jamBuka}.00 - ${jamTutup < 10 ? "0" + jamTutup : jamTutup}.00`}
        </p>
        <div className="flex items-center justify-between mt">
          <div className="flex text-primary-500 items-center pt-6">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <p className="text-black ml-4">125</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-primary-500">{`Rp${harga}/jam/sesi`}</p>
            <Button onClick={handleGetDesc}>Sewa</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LapanganCard;
