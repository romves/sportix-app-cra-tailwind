import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import loginbg from "../assets/loginbg.png"
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";

const Signup = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center w-full h-screen bg-primary-50 pr-4 z-50">
      <img src={loginbg} alt="" className="h-full w-[960px] object-cover rounded-r-2xl" />
      <InputCard>
        <h1 className="font-bold text-3xl mb-2">Buat akunmu</h1>
        <p className="mb-10 body-text">
          Buat akun untuk memesan lapangan, mencari partner olahraga dan mencari
          coach
        </p>
        <form onSubmit={handleFormSubmit} className="w-full flex flex-col">
          <InputField
            className="input-area"
            type="email"
            placeholder="Nomor ponsel atau email"
          />
          <InputField
            className="input-area"
            type="text"
            placeholder="Nama lengkap"
          />
          <InputField
            className="input-area"
            type="password"
            placeholder="Kata sandi"
          />
          <p className="body-text__small pt-8">
            Dengan membuat akun kamu menyetujui{" "}
            <a href="google.com" className="text-primary-600">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="google.com" className="text-primary-600">
              Kebijakan Privasi
            </a>{" "}
            kami
          </p>
          <div className="flex m-auto pt-4 text-white">
            <Button type="submit">Buat akun</Button>
          </div>
          <div className="flex m-auto px-3 py-2 border border-black rounded">
            <p className="text-primary-500 text-center body-text__small">
              <span className="text-black">Sudah punya akun?</span>{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </InputCard>
    </div>
  );
};

export default Signup;
