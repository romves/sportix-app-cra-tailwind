import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import loginbg from "../assets/loginbg.png";
import axios from "axios";

const Login = ({handleLogin, setEmail, setPassword, error}) => {
  
  return (
    <div className="flex justify-between items-center w-full h-full bg-primary-50 z-50">
      <img
        src={loginbg}
        alt=""
        className="w-[50vw] h-screen object-cover rounded-r-2xl"
      />
      <div className="flex h-screen w-[500px] mx-10 items-center justify-center">
        <InputCard className="w-[40vw] h-[600px] ">
          <div className=" min-w-[440px]">
            <h1 className="h1-semi">Masuk</h1>
            <p className="mb-16 body-text">
              Selamat datang kembali warrior! <br /> Lakukan pemesanan dan
              dapatkan poin!
            </p>
            <p>{error.message}</p>
            <form onSubmit={handleLogin} className="w-full flex flex-col">
              <InputField
                type="email"
                name="email"
                placeholder="Masukkan email"
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2"
              />
              <InputField
                type="password"
                name="password"
                placeholder="Masukkan kata sandi"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-end text-xs text-primary-500">
                Lupa kata sandi?
              </p>
              <div className="flex flex-col items-center pt-[85px] text-white mt-10">
                <Button width={'180px'} className="my-4">Masuk</Button>
                <div className="flex m-auto p-1 border border-black rounded-lg">
                  <p className="text-primary-500 text-center body-md-norm">
                    <span className="text-black">Belum punya akun?</span>{" "}
                    <Link to="/signup">Daftar</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </InputCard>
      </div>
    </div>
  );
};

export default Login;
