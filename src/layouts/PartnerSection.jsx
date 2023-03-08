import React from "react";
import PartnerCard from "../components/PartnerCard";

const PartnerSection = () => {
  return (
    <div className="h-[500px] bg-primary-200">
      <div className="pt-4 px-20">
        <h1 className="text-primary-500">Partner</h1>
        <h2 >Mereka lagi cari teman buat olahraga nih!</h2>
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
