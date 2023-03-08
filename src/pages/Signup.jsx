import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import InputCard from "../components/InputCard";

const Signup = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-end w-full h-screen bg-primary-50 px-4 py-20 z-50">
      <InputCard>
        <h1 className="font-bold text-3xl mb-2">Buat akunmu</h1>
        <p className="mb-10 body-text">
          Buat akun untuk memesan lapangan, mencari partner olahraga dan mencari
          coach
        </p>
        <form onSubmit={handleFormSubmit} className="w-full flex flex-col">
          <input
            className="input-area"
            type="email"
            placeholder="Nomor ponsel atau email"
          />
          <input
            className="input-area"
            type="text"
            placeholder="Nama lengkap"
          />
          <input
            className="input-area"
            type="password"
            placeholder="Kata sandi"
          />
          <p className="body-text__small pt-8">
            Dengan membuat akun kamu menyetujui{" "}
            <a href="#" className="text-orange-600">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-orange-600">
              Kebijakan Privasi
            </a>{" "}
            kami
          </p>
          <div className="flex m-auto pt-4">
            <Button type="submit">Buat akun</Button>
          </div>
          <div className="flex m-auto px-3 py-2 border border-black rounded">
            <p className="text-orange-600 text-center body-text__small">
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
