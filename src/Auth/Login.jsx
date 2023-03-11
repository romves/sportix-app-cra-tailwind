import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import loginbg from "../assets/loginbg.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState({
    message: "",
    status: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("https://ahmadsultan.aenzt.tech/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  return (
    <div className="flex justify-between items-center w-full h-full bg-primary-50 pr-4 z-50">
      <img
        src={loginbg}
        alt=""
        className=" h-screen object-cover rounded-r-2xl"
      />
      <div className="flex h-screen w-7/12 mx-10 items-center justify-end">
        <InputCard className='w-[500px] h-[600px]'>
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
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className='mb-2'
            />
            <InputField
              type="password"
              name="password"
              placeholder="Kata sandi"
              onChange={(e) => setPassword(e.target.value)}
              width={"440px"}
            />
            <p className="text-end text-xs text-primary-500">
              Lupa kata sandi?
            </p>
            <div className="flex flex-col items-center pt-[85px] text-white">
              <Button className='my-4'>Masuk</Button>
              <div className="flex m-auto p-1 border border-black rounded-lg">
                <p className="text-primary-500 text-center body-md-norm">
                  <span className="text-black">Belum punya akun?</span>{" "}
                  <Link to="/signup">Daftar</Link>
                </p>
              </div>
            </div>
          </form>
        </InputCard>
      </div>
    </div>
  );
};

export default Login;
