import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { GiShakingHands } from "react-icons/gi";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { BiReceipt } from "react-icons/bi";
import logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const handleLogout = async () => {
    console.log(window.localStorage.getItem("token"));
    axios
      .post(
        "https://ahmadsultan.aenzt.tech/api/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        window.localStorage.removeItem("token");

        setTimeout(() => {
          window.location.reload();
          navigate('/')
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between w-full h-[70px] px-16 bg-black text-white z-20">
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex py-3">
        <ul className="flex end py-4 mr-2 items-center body-text">
          <VscHome />
          <li className="mr-3 ml-1">
            <Link to="/">Beranda</Link>
          </li>
          <GiShakingHands />
          <li className="mr-3 ml-1">
            <Link>Daftar Jadi Partner</Link>
          </li>
          <MdOutlineNotListedLocation />
          <li className="mr-3 ml-1">
            <Link>Bantuan</Link>
          </li>
          <BiReceipt />
          <li className="mr-3 ml-1">
            <Link>Pesanan Saya</Link>
          </li>
        </ul>
        {window.localStorage.getItem("token") ? (
          <>
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center"
              >
                <BsPerson />
                <p className="ml-1">Profil</p>
              </button>
              {isOpen && (
                <div className="absolute mt-16 bg-primary-200 text-primary-400">
                  <button onClick={handleLogout}>logout</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <Link to="/login" className="mr-3 h4">
              Masuk
            </Link>
            <Link
              to="/signup"
              className="bg-primary-500 px-3 mr-5 h4 rounded-md"
            >
              Daftar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
