import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import loginbg from "../assets/loginbg.png";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import DropdownRegister from "../components/DropdownRegister";
import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Checkbox";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState(0);
  const [umur, setUmur] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [setuju, setSetuju] = useState();
  const [nextPG, setNextPG] = useState(false);

  const navigate = useNavigate();

  const arrPekerjaan = ["Mahasiswa", "Pelajar", "Karyawan", "Lainnya"];
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (setuju) {
      await axios
        .post("https://ahmadsultan.aenzt.tech/api/register", {
          name: nama,
          email: email,
          password: password,
          nomor: noTelp,
          password_confirmation: confPassword,
          jenisKelamin: jenisKelamin,
          umur: umur,
          pekerjaan: pekerjaan,
        })
        .then((response) => {
          Cookies.set("token", response.data.token);
          setNama("");
          setEmail("");
          setNoTelp("");
          setPassword("");
          setConfPassword("");
          setPekerjaan("");
          setUmur("");
          setJenisKelamin(0);
          setSetuju();
          navigate("/");
        })
        .catch((error) => {
          setError(error.response.data);
        });
    }
  };

  return (
    <div className="flex items-center w-full h-full bg-primary-50 z-50">
      <img
        src={loginbg}
        alt=""
        className="w-[50vw] h-screen object-cover rounded-r-2xl"
      />
      <div className="flex h-screen ml-[5vw] w-[500px] mx-10 items-center justify-center">
        <InputCard className="w-[40vw] h-[600px]">
          <div className="min-w-[440px]">
            <h1 className="font-bold h1-semi mb-1">Buat akunmu</h1>
            <p className="mb-6 body-text-norm">
              Buat akun untuk memesan lapangan, mencari partner olahraga dan
              mencari coach
            </p>
          </div>
          {/* <div className="absolute w-[400px]">{error.message}</div> */}

          <form onSubmit={handleSignUp} className="w-full flex flex-col ">
            {nextPG ? (
              <div className="flex flex-col items-center text-center justify-center mt-8">
                <div className="flex py-1">
                  <DropdownRegister
                    width={"210"}
                    setJenisKelamin={setJenisKelamin}
                  />
                  <InputField
                    type="number"
                    placeholder="Umur"
                    width={"210px"}
                    value={umur}
                    onChange={(e) => setUmur(e.target.value)}
                  />
                </div>
                <Dropdown setData={setPekerjaan} array={arrPekerjaan} />
                <div className="flex justify-center mt-1">
                  <button type="button" onClick={() => setNextPG(false)}>
                    <VscCircle />
                  </button>
                  <button type="button" onClick={() => setNextPG(true)}>
                    <VscCircleFilled />
                  </button>
                </div>
                <div className="flex items-center text-center justify-center ml-4 pb-16">
                  <Checkbox setSetuju={setSetuju} />
                  <p className="body-text-norm">
                    Dengan membuat akun kamu menyetujui{" "}
                    <span>Syarat & Ketentuan</span> dan{" "}
                    <span>Kebijakan Privasi</span> kami
                  </p>
                </div>
                <div className="flex m-auto text-white mt-1">
                  <Button
                    width={"180px"}
                    type="submit"
                    onClick={handleSignUp}
                    className="my-4"
                  >
                    Daftar
                  </Button>
                </div>
                <div className="flex m-auto p-1 border border-black rounded-lg">
                  <p className="text-primary-500 text-center body-md-norm">
                    <span className="text-black">Sudah punya akun?</span>{" "}
                    <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <InputField
                  className="input-area"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
                <InputField
                  className="input-area"
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  className="input-area"
                  type="tel"
                  placeholder="Masukkan Nomor telepon Anda"
                  value={noTelp}
                  onChange={(e) => setNoTelp(e.target.value)}
                />
                <InputField
                  className="input-area"
                  type="password"
                  placeholder="Masukkan kata sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputField
                  className="input-area"
                  type="password"
                  placeholder="Konfirmasi kata sandi"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
                <div className="flex justify-center mt-1">
                  <button type="button" onClick={() => setNextPG(false)}>
                    <VscCircleFilled />
                  </button>
                  <button type="button" onClick={() => setNextPG(true)}>
                    <VscCircle />
                  </button>
                </div>
                <div className="flex m-auto text-white">
                  <Button
                    width={"180px"}
                    type="button"
                    onClick={() => setNextPG(true)}
                    className="my-4"
                  >
                    Daftar
                  </Button>
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
    </div>
  );
};

export default Signup;
