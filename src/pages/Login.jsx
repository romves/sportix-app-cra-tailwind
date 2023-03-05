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
            <h2 className=" mb-20">Masuk</h2>
            <form className="w-full flex flex-col">
              <input
                className="input-area"
                type="email"
                name="email"
                placeholder="Nomor ponsel atau email"
              />
              <input
                className="input-area"
                type="password"
                name="password"
                placeholder="Kata sandi"
              />
              <p className="text-end text-xs text-orange-600">
                Lupa kata sandi?
              </p>
              <div className="flex m-auto pt-[108px]">
                <button className="form-button">Log in</button>
              </div>
              <div className="flex m-auto px-3 py-2 border border-black rounded">
                <p className="text-orange-600 text-center body-text__small">
                  <span className="text-black">Belum punya akun?</span>{" "}
                  <Link to="/signup">Daftar</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
