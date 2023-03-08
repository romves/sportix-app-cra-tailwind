import React from "react";

const InputCard = ({ children }) => {
  return (
    <>
      <div className="flex items justify-center w-[500px] h-[600px] mr-12 bg-white rounded-2xl shadow-lg">
        <div className="w-[400px] py-6">
          {children}
          {/*  <p className="text-orange-700 font-bold text-3xl">
              Welcome back warrior!
            </p>
            <h2 className=" mb-16">Masuk</h2>
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
            </form> */}
        </div>
      </div>
    </>
  );
};

export default InputCard;
