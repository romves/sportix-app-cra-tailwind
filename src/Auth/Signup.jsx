import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import loginbg from "../assets/loginbg.png";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";

const Signup = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [nextPG, setNextPG] = useState(true);

  const handleSignUp = (e) => {
    console.log(nama, email, noTelp, password, confPassword);
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center w-full h-screen bg-primary-50 pr-4 z-50">
      <img
        src={loginbg}
        alt=""
        className="h-full w-[960px] object-cover rounded-r-2xl"
      />
      <InputCard>
        <h1 className="font-bold text-3xl mb-2">Buat akunmu</h1>
        <p className="mb-10 body-text">
          Buat akun untuk memesan lapangan, mencari partner olahraga dan mencari
          coach
        </p>
        <form onSubmit={handleSignUp} className="w-full flex flex-col">
          {nextPG ? (
            <>
              <Dropdown header="Perempuan">
              </Dropdown>
              <input type="text" placeholder="umur" />
            </>
          ) : (
            <>
              <InputField
                className="input-area"
                type="text"
                placeholder="Masukkan nama lengkap Anda"
                onChange={(e) => setNama(e.target.value)}
              />
              <InputField
                className="input-area"
                type="email"
                placeholder="Masukkan email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                className="input-area"
                type="tel"
                placeholder="Masukkan Nomor telepon Anda"
                onChange={(e) => setNoTelp(e.target.value)}
              />
              <InputField
                className="input-area"
                type="password"
                placeholder="Masukkan kata sandi"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputField
                className="input-area"
                type="password"
                placeholder="Konfirmasi kata sandi"
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <div className="flex border justify-center">
                <VscCircleFilled />
                <VscCircle />
              </div>
              <div className="flex m-auto pt-4 text-white">
                <Button type="submit">Buat akun</Button>
              </div>
              <div className="flex m-auto p-1 border border-black rounded-lg">
                <p className="text-primary-500 text-center body-md-norm">
                  <span className="text-black">Sudah punya akun?</span>{" "}
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </>
          )}
        </form>
      </InputCard>
    </div>
  );
};

export default Signup;
