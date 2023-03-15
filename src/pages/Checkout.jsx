import React from "react";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import LongFilterButton from "../components/LongFilterButton";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";

const Checkout = () => {
  return (
    <Utama>
      <div className="pt-[75px]">
        <TabSelect />
        <div className="h-[700px] w-full">
          Pilih Jadwal sewa dan Lapangan
          <div className="flex border mx-20">
            <InputCard>
              <LongFilterButton />
              <LongFilterButton />
              <div>
                <div>

                </div>
                Waktu
                <div>
                
                </div>
              </div>
            </InputCard>


            <InputCard >
              Detail penyewaan
              <div className="border flex items-center w-[300px] rounded-xl">
                <img
                  src=""
                  alt=""
                  className="w-[100px] border h-[100px] m-4 rounded-xl"
                />
                <div>
                  <h4>Scorpio Futsal</h4>
                  <h4>Lapangan 1</h4>
                  <p>3 Januari 2023</p>
                  <p>07</p>
                </div>
              </div>
              <div className="flex justify-between">
                Total
                <div>
                  <Button>Lanjut ke Pembayaran</Button>
                </div>
              </div>
            </InputCard>
          </div>
        </div>
      </div>
    </Utama>
  );
};

export default Checkout;
