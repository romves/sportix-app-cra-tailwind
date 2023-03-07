import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed flex justify-between w-full h-[70px] bg-black px-4 text-white">
      <img href="" alt="logo" />
      <div className="flex py-3 border-1-red">
        <ul className="flex end py-4 mr-5 items-center body-text">
          <li className="mx-2 "><Link to="/">Beranda</Link></li>
          <li className="mx-2 "><Link>Daftar Jadi Partner</Link></li>
          <li className="mx-2 "><Link>Bantuan</Link></li>
          <li className="mx-2 "><Link>Keranjang</Link></li>
        </ul>
        <div className="flex items-center">
          <Link to="/login" className="mr-3 h4">
            Masuk
          </Link>
          <Link
            to="/signup"
            className="bg-orange-700 px-5 mr-5 h4 rounded-md"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
