import React from "react";
import { ImStarFull } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import lapcard from "../assets/lapcard.png";
import Button from "./Button";

const LapanganCard = () => {
  return (
    <div className="flex w-[1150px] h-[240px] rounded-xl mb-4 shadow-md">
      <img src={lapcard} alt="" className="object-cover rounded-l-xl" />
      <div className="w-[650px] px-8 py-2 rounded-r-xl">
        <h3>Scorpio Futsal</h3>
        <div className="flex items-center">
          <SlLocationPin className="mr-2"/>
          <p className="body-text-med">Jalan Dewandaru No.12, Malang</p>
        </div>
        <p className="body-text-med"> Jumlah lapangan: 2</p>
        <p className="body-text-nor">
          Fasilitas: Parkir, Kamar Ganti, Toilet, Kantin, AC, Wifi
        </p>
        <p className="body-text-nor-transp">
          Buka setiap hari dari jam 07.00 - 24.00
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
            <p className="text-primary-500">Rp70000/jam/sesi</p>
            <Button>Sewa</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LapanganCard;
