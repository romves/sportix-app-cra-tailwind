import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import CC from "../components/CC";
import InputCard from "../components/InputCard";
import kartu from "../assets/kartu.png";
import dana from "../assets/dana.png";
import ovo from "../assets/ovo.png";
import gopay from "../assets/gopay.png";

const Payment = ({ total, setShowCC, handleCheckout, userID, ccToken }) => {
  const admin = 1000;
  const getAllTotal = () => {
    return total + admin;
  };
  const [namePembeli, setNamePembeli] = useState("");
  const getUserProfile = async () => {
    await axios
      .get(`https://ahmadsultan.aenzt.tech/api/userId/${userID}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        setNamePembeli(response.data.data.name);
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="mx-20 ">
      <h3 className="text-primary-700">Pembayaran</h3>
      <div className="flex justify-center">
        <InputCard className={"w-full"}>
          <div className="flex flex-col text-center justify-center items-center w-[50vw]">
            <h4 className="h4-med">Pilih Metode Pembayaran</h4>
            <div className="w-[50vw] border-t-primary-300 mt-12">
              <ul className="w-[40vw] m-auto">
                <li className="flex justify-between mb-6 ">
                  <div className="flex items-center">
                    <img src={kartu} alt="cc" className="ml-8 w-8 mr-12" />
                    Kartu Kredit
                  </div>{" "}
                  <input type="radio" name="" id="" />
                </li>
                <li className="flex justify-between mb-6 ">
                  <div className="flex items-center">
                    <img src={ovo} alt="cc" className="w-20 mr-8" />
                    OVO
                  </div>
                  <input type="radio" name="" id="" />
                </li>
                <li className="flex justify-between mb-6 ">
                  <div className="flex items-center">
                    <img src={dana} alt="cc" className="w-20 mr-8" />
                    DANA
                  </div>
                  <input type="radio" name="" id="" />
                </li>
                <li className="flex justify-between mb-6 ">
                  <div className="flex items-center">
                    <img src={gopay} alt="cc" className="w-20 mr-8" />
                    Gopay
                  </div>
                  <input type="radio" name="" id="" />
                </li>
              </ul>
            </div>
          </div>
        </InputCard>
        <InputCard className={"w-6/12"}>
          <div className="flex flex-col w-[24vw] text">
            <h4 className="h4-med ">Detail Pembayaran</h4>
            <div className="flex justify-between  w-250px">
              <p className="body-text-nor pb-4">Nama penyewa</p>
              <p className="body-text-nor pb-4">{namePembeli.name}</p>
            </div>
            <div className="flex justify-between w-250px">
              <p className="body-text-nor ">Biaya sewa lapangan</p>
              <p className="body-text-nor ">Rp{total}</p>
            </div>
            <div className="flex justify-between w-250px">
              <p className="body-text-nor ">Biaya sewa alat</p>
              <p className="body-text-nor ">Rp.0</p>
            </div>
            <div className="flex justify-between w-250px">
              <p className="body-text-nor ">Biaya admin</p>
              <p className="body-text-nor ">Rp.{admin}</p>
            </div>
            <div className="flex justify-between w-250px">
              <p className="body-text-nor ">Total</p>
              <p className="body-text-nor ">Rp.{getAllTotal()}</p>
            </div>
            <div className="flex justify-between w-250px">
              <h4 className="h4-med">Total Pembayaran</h4>
              <h4 className="h4-med">Rp.{getAllTotal()}</h4>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            {ccToken ? (
              <Button width={"180px"} className={"mt-8"} onClick={(e) => handleCheckout()}>
                Konfirmasi
              </Button>
            ) : (
              <Button
                width={"180px"}
                className={"mt-8"}
                onClick={(e) => setShowCC(true)}
              >
                Bayar
              </Button>
            )}
          </div>
        </InputCard>
      </div>
    </div>
  );
};

export default Payment;
