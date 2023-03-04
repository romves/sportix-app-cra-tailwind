import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen bg-amber-100">
      <div className="fixed w-full px-4 py-20 z-50">
        <div className="max-w-[450px] h-[600px] bg-white mx-auto rounded-2xl shadow-lg">
          <div className="max-w-[380px] mx-auto py-10">
            <p className="text-orange-700 font-bold text-3xl">
              Welcome back warrior!
            </p>
            <h1 className="font-bold text-3xl mb-20">Log in</h1>
            <form className="w-full flex flex-col">
              <input
                className="p-4 my-1 rounded bg-gray-200"
                type="email"
                placeholder="Nomor ponsel atau email"
              />
              <input
                className="p-4 my-1 rounded bg-gray-200"
                type="password"
                placeholder="Kata sandi"
              />
              <p className="text-end text-xs text-orange-600">
                Lupa kata sandi?
              </p>
              <div className="flex m-auto pt-[108px]">
                <button className=" text-center bg-orange-600 w-[300px] text-gray-100 py-3 my-4 rounded-xl">
                  Log in
                </button>
              </div>
                <p className="text-orange-600 text-center">
                  <span className="text-gray-500">Belum punya akun?</span>{" "}
                  <Link to="/signup">Daftar</Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
