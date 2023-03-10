import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-around bg-color-white h-[240px] px-6 py-10">
      <div className="justify-start">
        <img src={logo} alt="Logo" className="" />
        <div className="pl-12">
          <p>Ikuti kami :</p>
          <ul>
            <li>@sportixind</li>
            <li>@sportixind</li>
            <li>Sportix Indonesia</li>
            <li>Sportix Indonesia</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <p className="beranda-lg-med">Produk</p>
        <ul>
          <li>Sewa Lapangan</li>
          <li>Cari Teman</li>
          <li>Sewa Coach</li>
        </ul>
      </div>
      <div>
        <p className="beranda-lg-med">Dukungan</p>
        <ul>
          <li>Kebijakan Privasi</li>
          <li>Daftarkan Lapanganmu</li>
          <li>Pusat Bantuan</li>
          <li>Daftar Jadi Coach</li>
          <li>Syarat dan Ketentuan</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
