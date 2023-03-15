import React from "react";
import Button from "../components/Button";
import Calendar from "../components/Calendar";
import FilterButton from "../components/FilterButton";
import InputCard from "../components/InputCard";
import LongFilterButton from "../components/LongFilterButton";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";

const Checkout = () => {
  return (
    <Utama>
      <div className="pt-[75px]">
        <TabSelect />
        <div className="h-[700px] w-full px-20">
          <h3>Pilih Jadwal sewa dan Lapangan</h3>
          <div className="flex border">
            <InputCard>
              <LongFilterButton />
              <div>
                <FilterButton />
              </div>
              <div>
                <div className="my-6">
                  <Calendar />
                </div>
                Waktu
                <div></div>
              </div>
            </InputCard>

            <InputCard>
              <h4></h4> 
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
