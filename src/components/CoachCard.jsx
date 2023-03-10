import React from "react";
import { ImStarFull } from "react-icons/im";
import Button from "./Button";
import imagecoch from "../assets/imagecoch.png"

const CoachCard = () => {
  return (
    <div className="drop-shadow-lg rounded-lg bg-white min-w-[380px] w-[378px] mx-4">
      <img
        className="rounded-t-lg w-[380px] h-[288px] object-cover"
        src={imagecoch}
        alt=""
      />
      <div className="flex flex-col justify-between h-[210px] px-5">
        <div className="h-[120px]">
          <h4 className="h4-med">Janetter Robin</h4>
          <p className="body-text-nor">
            Janette adalah seorang intruktur yoga yang telah mengajar selama 10
            tahun. Janette mengajar yoga mulai dari tingkat pemula.
          </p>
        </div>
        <div className="flex items-center justify-between my-1">
          <div className="flex text-primary-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </div>
          <Button type="button" width="200px">
            Reservasi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
