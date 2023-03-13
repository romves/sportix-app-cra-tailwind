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
  const navigate = useNavigate();
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
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed flex justify-between w-full h-[75px] pr-16 pl-8 bg-nav-blue text-white z-20">
      <Link to="/">
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
                <p className="ml-1 mr-4">Profil</p>
              </button>
            </div>
            {isOpen && (
              <div className="absolute flex w-[600px] h-[200px] justify-end -z-50">
                <div className="absolute flex flex-col h-[100px] w-[150px] bg-nav-blue text-white mt-16  rounded-xl">
                  <div className="flex h-[75px] text-center justify-center border-b-2 items-center ">
                    <BsPerson className="mr-1"/>
                    <button onClick={() => navigate('/profile')} className="">Profil</button>
                  </div>
                  <button onClick={handleLogout} className="h-[75px]">
                    {" "}
                    Keluar
                  </button>
                </div>
              </div>
            )}
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
