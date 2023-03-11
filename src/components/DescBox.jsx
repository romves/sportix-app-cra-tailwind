import React from "react";
import InputCard from "./InputCard";
import { BsCarFrontFill } from "react-icons/bs"

const DescBox = () => {
  return (
    <div>
      <InputCard className={"w-[700px] h-[1000px]"}>
        <div className="flex flex-col w-[630px] text-start border-b pb-2">
          <h1>Scorpio Futsal</h1>
          <p>4.9/5 (12 reviews)</p>
          <p>Panjang lapangan : 25 m x 15 m</p>
          <p>Jumlah Lapangan : 2</p>
        </div>
        <div className="flex flex-col w-[630px] text-start border-b pb-2">
          <h4>Fasilitas</h4>
          <div className="grid grid-cols-4">
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Parkir mobil</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Toilet</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Sintetik</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Shower</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Parkir mobil</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Parkir mobil</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Parkir mobil</div>
            <div className="flex items-center mb-2"><BsCarFrontFill className="mr-1"/>Parkir mobil</div>
          </div>
        </div>
        <div className="flex flex-col w-[630px] text-start border-b pb-2">
          <h4>Apasih kelebihan lapangan ini?</h4>
          <div></div>
        </div>
        <div className="flex flex-col w-[630px] text-start border-b pb-2">
          <h4>Review</h4>
          <div></div>
        </div>
        <div className="flex flex-col w-[630px] text-start border-b pb-2">
          <h4>Lokasi</h4>
          <p>Jalan Dewandanu No. 12, Malang</p>
          <div></div>
        </div>
      </InputCard>
    </div>
  );
};

export default DescBox;
