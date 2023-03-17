import React from "react";
import Button from "../components/Button";
import CC from "../components/CC";
import InputCard from "../components/InputCard";

const Payment = ({ total, setShowCC, handleCheckout }) => {
  return (
    <>
      <div className="flex">
        Pembayaran
        <InputCard>
          <h4>Pilih Metode Pembayaran</h4>
          <div>
            Kartu Kredit <input type="radio" name="" id="" />
          </div>
        </InputCard>
        <div className="flex flex-col">
          <h4>Detail Pembayaran</h4>
          <div className="flex justify-between">
            <p>Nama penyewa</p>
            <p>Yohana</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya sewa lapangan</p>
            <p>rp00000</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya sewa alat</p>
            <p>Rp.5000</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya admin</p>
            <p>Rp.1000</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>Rp.{total}</p>
          </div>
          <div className="flex justify-between">
            <h3>Total Pembayaran</h3>
            <h3>Rp.</h3>
          </div>
        </div>
        <Button onClick={(e) => setShowCC(true)}>Bayar</Button>
        <Button onClick={(e) => handleCheckout()}>Bayar fiks</Button>/
        <InputCard />
      </div>
    </>
  );
};

export default Payment;
