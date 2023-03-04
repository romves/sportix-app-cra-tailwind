import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-500 p-4">
      <div className="flex">
        <img className="mr-24 ml-8" src="" alt="logo" />
      </div>

      <div className="flex">
        <ul className="flex mt-1 text-white">
          <li className="mr-10">Beranda</li>
          <li className="mr-10">Daftar Jadi Partner</li>
          <li className="mr-10">Bantuan</li>
          <li className="mr-10">Krjg</li>
        </ul>
        <button className="mr-3 text-white text-lg font-semibold"><Link to='/login'>Masuk</Link></button>
        <button className="bg-orange-700 px-4 py-[4px] font-bold text-white rounded-md">
        <Link to='/signup'>Daftar</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
