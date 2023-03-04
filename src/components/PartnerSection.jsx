import React from "react";
import PartnerCard from "./PartnerCard";

const PartnerSection = () => {
  return (
    <div className="h-[500px] bg-gradient-to-l from-orange-500/50">
      <div className="pt-8 px-20">
        <h3 className="text-orange-600 text-lg font-bold ">Partner</h3>
        <h2 className="text-3xl font-bold">Mereka lagi cari teman buat olahraga nih!</h2>
        <p className="text-lg">Cari teman dan berolahraga bersama mereka</p>
      </div>
      <div className="my-4 flex">
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
