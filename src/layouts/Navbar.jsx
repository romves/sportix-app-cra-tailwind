import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="fixed flex justify-between w-full h-[70px] px-16 bg-black text-white">
      <img src={logo} alt="logo"/>
      <div className="flex py-3">
        <ul className="flex end py-4 mr-5 items-center body-text">
          <li className="mx-2 "><Link to="/">Beranda</Link></li>
          <li className="mx-2 "><Link>Daftar Jadi Partner</Link></li>
          <li className="mx-2 "><Link>Bantuan</Link></li>
          <li className="mx-2 "><Link>Pesanan Saya</Link></li>
        </ul>
        <div className="flex items-center">
          <Link to="/login" className="mr-3 h4">
            Masuk
          </Link>
          <Link
            to="/signup"
            className="bg-primary-700 px-5 mr-5 h4 rounded-md"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
