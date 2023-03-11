import React from "react";
import footerlogo from "../assets/footerlogo.png";
import wa from "../assets/wa.png";
import mail from "../assets/mail.png";
import cc from "../assets/cc.png";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-between bg-color-white h-[350px] w-full shadow-2xl">
      <div className=" bg-primary-200 h-[350px] w-[450px] pl-8 py-12">
        <div className="">
          <img src={footerlogo} alt="Logo" className=" w-[320px]" />
        </div>
        <div className=" pl-[75px] beranda-lg-norm">
          <p>Ikuti kami :</p>

          <div className="flex items-center">
            <BsInstagram />
            <p className="pl-2">@sportixind</p>
          </div>
          <div className="flex items-center">
            <BsTwitter />
            <p className="pl-2">@sportixind</p>
          </div>
          <div className="flex items-center">
            <BsFacebook />
            <p className="pl-2">Sportix Indonesia</p>
          </div>
          <div className="flex items-center">
            <BsYoutube />
            <p className="pl-2">Sportix Indonesia</p>
          </div>
        </div>
      </div>

      <div className="justify-start h-[350px] w-[350px] pl-12  py-12">
        <ul className="beranda-lg-norm flex flex-col ">
          <li className="flex mb-2">
            <img src={wa} alt="cc-logo" />
            <div className="ml-2">
              <p>Whatsapp</p>
              <p>0823-0987-6543</p>
            </div>
          </li>
          <li className="flex mb-2">
            <img src={cc} alt="cc-logo" />
            <div className="ml-2">
              <p>Call center</p>
              <p>+6221-39876-0898</p>
            </div>
          </li>
          <li className="flex mb-2">
            <img src={mail} alt="cc-logo" />
            <div className="ml-2">
              <p>Email</p>
              <p>cs@sportix.com</p>
            </div>
          </li>
          <li className="h3-bold">FAQ</li>
        </ul>
      </div>

      <div className="justify-start h-[350px] w-[300px] pl-12  py-12">
        <p className="beranda-lg-med pb-4">Produk</p>
        <ul className="beranda-lg-norm">
          <li>Sewa Lapangan</li>
          <li>Cari Teman</li>
          <li>Sewa Coach</li>
        </ul>
      </div>

      <div className="justify-start h-[350px] w-[350px] pl-6  py-12">
        <p className="beranda-lg-med pb-4">Dukungan</p>
        <ul className="beranda-lg-norm">
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
