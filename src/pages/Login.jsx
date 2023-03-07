import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <InputCard>
      <p className="text-orange-700 font-bold text-3xl">
        Welcome back warrior!
      </p>
      <h2 className=" mb-16">Masuk</h2>
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
        <p className="text-end text-xs text-orange-600">Lupa kata sandi?</p>
        <div className="flex flex-col m-auto pt-[108px]">
          <Button>Log in</Button>
          <div className="flex m-auto px-3 py-2 border border-black rounded">
            <p className="text-orange-600 text-center body-text__small">
              <span className="text-black">Belum punya akun?</span>{" "}
              <Link to="/signup">Daftar</Link>
            </p>
          </div>
        </div>
      </form>
    </InputCard>
  );
};

export default Login;
