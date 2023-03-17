import React from "react";
import Button from "./Button";
import alat from "../assets/alat.png";
import InputCard from "./InputCard";

const Popup = ({ setShowPopup, setSewaAlat, setLanjutPembayaran }) => {
  return (
    <div className=" absolute flex items-center justify-center text-center h-screen w-screen bg-black bg-opacity-40">
      <InputCard className="absolute m-auto w-[400px] h-[300px]">
        <div className="flex flex-col items-center">
          <img src={alat} alt="gambar" className="w-[130px]" />
          <p className="mb-4 w-[150px] text-center">
            Apakah anda juga ingin menyewa alat?
          </p>
          <div className="flex">
            <Button
              className={"w-[154px] mr-6"}
              onClick={() => {
                setShowPopup(false);
                setSewaAlat(true);
                setLanjutPembayaran(true);
              }}
            >
              YA
            </Button>
            <Button
              className={"w-[154px]"}
              onClick={() => {
                setShowPopup(false);
                setSewaAlat(false);
                setLanjutPembayaran(true);
              }}
            >
              TIDAK
            </Button>
          </div>
        </div>
      </InputCard>
    </div>
  );
};

export default Popup;
