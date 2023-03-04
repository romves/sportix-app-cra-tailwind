import React from "react";
import PartnerCard from "./PartnerCard";

const PartnerSection = () => {
  return (
    <div className="h-[500px] bg-orange-50">
      <div className="pt-8 px-20">
        <h3 className="text-orange-600 text-md font-bold ">Partner</h3>
        <h2 className="text-2xl font-bold">Mereka lagi cari teman buat olahraga nih!</h2>
        <p>Cari teman dan berolahraga bersama mereka</p>
      </div>
      <div className="my-4 flex">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
      <div className="text-end px-8">
        <p className="font-bold text-sm">Geser untuk lihat lebih banyak</p>
      </div>
    </div>
  );
};

export default PartnerSection;
