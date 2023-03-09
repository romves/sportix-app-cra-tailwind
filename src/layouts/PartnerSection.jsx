import React from "react";
import PartnerCard from "../components/PartnerCard";

const PartnerSection = () => {
  return (
    <div className="h-[700px] bg-primary-200">
      <div className="pt-8 px-20">
        <h1 className="text-primary-500 h1-med leading-10">Teman</h1>
        <h3 className="h3-med">Mereka lagi cari teman buat olahraga nih!</h3>
        <p className="beranda-lg-norm">Cari teman dan berolahraga bersama mereka</p>
      </div>
      <div className="my-4 mx-16 flex">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </div>
  );
};

export default PartnerSection;
