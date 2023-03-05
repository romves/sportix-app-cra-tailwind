import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen bg-amber-100">
      <div className="fixed w-full px-4 py-20 z-50">
        <div className="max-w-[450px] h-[600px] bg-white mx-auto rounded-2xl shadow-lg">
          <div className="max-w-[380px] mx-auto py-10">
            <h1 className="font-bold text-3xl mb-2">Buat akunmu</h1>
            <p className="mb-10 body-text">
              Buat akun untuk memesan lapangan, mencari partner olahraga dan
              mencari coach
            </p>
            <form className="w-full flex flex-col">
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
                <button className=" text-center bg-orange-600 w-[300px] text-gray-100 py-3 my-4 rounded-xl">
                  Buat akun
                </button>
              </div>
              <div>
                <p className="text-orange-600 text-center">
                  <span className="text-gray-500">Sudah punya akun?</span>{" "}
                  <Link to="/login">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
