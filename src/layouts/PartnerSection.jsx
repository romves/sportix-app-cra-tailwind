import React from "react";
import PartnerCard from "../components/PartnerCard";

const PartnerSection = ({ semuaTeman }) => {
  return (
    <div className="h-[700px] bg-primary-200">
      <div className="pt-8 px-20">
        <h1 className="text-primary-500 h1-med leading-10">Teman</h1>
        <h3 className="h3-med">Mereka lagi cari teman buat olahraga nih!</h3>
        <p className="beranda-lg-norm">
          Cari teman dan berolahraga bersama mereka
        </p>
      </div>
      <div className="my-4 mx-20 overflow-x-scroll flex">
        {semuaTeman.map((item) => {
          return <PartnerCard key={item.id} nama={item.user.name} desc={item.deskripsi} umur={item.user.umur} jk={item.user.jenisKelamin} kota={item.kota.namaKota}/>;
        })}
      </div>
    </div>
  );
};

export default PartnerSection;
