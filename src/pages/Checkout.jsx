import React from "react";
import Button from "../components/Button";
import Calendar from "../components/Calendar";
import FilterButton from "../components/FilterButton";
import InputCard from "../components/InputCard";
import ListWaktu from "../components/ListWaktu";
import LongFilterButton from "../components/LongFilterButton";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";

const Checkout = ({jamBuka, jamTutup}) => {
  return (
    <Utama>
      <div className="pt-[75px]">
        <TabSelect />
        <div className="h-[700px] w-5/12 px-20">
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
                <h3>Waktu</h3>
                <div>
                  <ListWaktu />
                </div>
              </div>
            </InputCard>

            <InputCard>
              <h3>Detail penyewaan</h3> 
              <div className="border flex items-center w-6/12 rounded-xl">
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
