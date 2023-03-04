import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen bg-amber-100">
      <div className="fixed w-full px-4 py-20 z-50">
        <div className="max-w-[450px] h-[600px] bg-white mx-auto rounded-2xl shadow-lg">
          <div className="max-w-[380px] mx-auto py-10">
            <h1 className="font-bold text-3xl mb-2">Buat akunmu</h1>
            <p className="mb-10">
              Buat akun untuk memesan lapangan, mencari partner olahraga dan
              mencari coach
            </p>
            <form className="w-full flex flex-col">
              <input
                className="p-4 my-1 rounded bg-gray-200"
                type="email"
                placeholder="Nomor ponsel atau email"
              />
              <input
                className="p-4 my-1 rounded bg-gray-200"
                type="email"
                placeholder="Nama lengkap"
              />
              <input
                className="p-4 my-1 rounded bg-gray-200"
                type="password"
                placeholder="Kata sandi"
              />
              <p className="text-center text-xs pt-8">
                Dengan membuat akun kamu menyetujui <a href="#" className="text-orange-600">Syarat & Ketentuan</a> dan <a href="#" className="text-orange-600">Kebijakan Privasi</a> kami
              </p>
              <div className="flex m-auto pt-4">
                <button className=" text-center bg-orange-600 w-[300px] text-gray-100 py-3 my-4 rounded-xl">
                  Buat akun
                </button>
              </div>
              <p className="text-orange-600 text-center">
                <span className="text-gray-500">Sudah punya akun?</span>{" "}
                <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
