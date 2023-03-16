import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ children, rute, label }) => {
  return (
    <div className="flex flex-col items-center text-white hover:text-primary-400">
      <Link
        to={rute}
        className="flex mx-4 my-2 rounded-full items-center justify-center text-white text-lg w-16 h-16 ring-4 ring-neutral-400 ring-opacity-50"
      >
        {children}
      </Link>
      <p className="beranda-md-norm">{label}</p>
    </div>
  );
};

export default NavButton;
