import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import loginbg from "../assets/loginbg.png"

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center w-full h-screen bg-primary-50 pr-4 z-50">
      <img src={loginbg} alt="" className="h-full w-[960px] object-cover rounded-r-2xl mr-20" />
      <InputCard>
        <h1 className="h1-semi">Masuk</h1>
        <p className="mb-16 body-text">Selamat datang kembali warrior! <br/> Lakukan pemesanan dan dapatkan poin!</p>
        <form onSubmit={handleFormSubmit} className="w-full flex flex-col">
          <InputField
            type="email"
            name="email"
            placeholder="Nomor ponsel atau email"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Kata sandi"
          />
          <p className="text-end text-xs text-primary-500">Lupa kata sandi?</p>
          <div className="flex flex-col items-center pt-[108px] text-white">
            <Button>Masuk</Button>
            <div className="flex m-auto px-3 py-2 border border-black rounded">
              <p className="text-primary-500 text-center body-text__small">
                <span className="text-black">Belum punya akun?</span>{" "}
                <Link to="/signup">Daftar</Link>
              </p>
            </div>
          </div>
        </form>
      </InputCard>
    </div>
  );
};

export default Login;
