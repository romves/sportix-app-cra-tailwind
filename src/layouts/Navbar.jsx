import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full flex justify-between h-[70px] bg-black px-4">
      <img href=''  alt="logo" />
      <div className="flex py-3 border-1-red">
        <ul className="flex end py-4 mr-5 items-center text-white body-text">
          <li className="mx-2 ">Beranda</li>
          <li className="mx-2 ">Daftar Jadi Partner</li>
          <li className="mx-2 ">Bantuan</li>
          <li className="mx-2 ">Krjg</li>
        </ul>
        <button className="mr-3 text-white h4 ">
          <Link to="/login">Masuk</Link>
        </button>
        <button className="bg-orange-700 px-5 my-2 mr-5 h4 text-white rounded-md">
          <Link to="/signup">Daftar</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
