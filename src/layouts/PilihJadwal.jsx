import React from "react";
import { Calendar } from "react-calendar";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import ListWaktu from "../components/ListWaktu";
import LongFilterButton from "../components/LongFilterButton";
import "../pages/calendar.css";

const PilihJadwal = ({
  descData,
  setSelectedTimes,
  setSelectedDate,
  selectedTimes,
  selectedDate,
  getHarga,
  setShowPopup,
}) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <div className="h-[800px] px-20 pt-8">
      <h3 className="mb-5">Pilih Jadwal sewa dan lapangan</h3>
      <div className="flex">
        <div className={"w-7/12"}>
          <div>
            <div className="my-6">
              <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
            <h3>Waktu</h3>
            <div>
              <ListWaktu
                selectedTimes={selectedTimes}
                setSelectedTimes={setSelectedTimes}
                buka={descData.buka}
                tutup={descData.tutup}
              />
            </div>
          </div>
        </div>
        <InputCard className={"w-full h-full"}>
          <div className="flex flex-col w-[60vh]">
            <h3>Detail penyewaan</h3>
            <div className="border flex items-center rounded-xl border-neutral-200 mt-2">
              <img
                src={descData.gambar}
                alt="gambar lapangan"
                className="w-[100px] border border-neutral-200 h-[100px] m-4 rounded-xl"
              />
              <div>
                <h4>{descData.nama}</h4>
                <h4>Lapangan 1</h4>
                <p>{selectedDate.toLocaleDateString("id-ID", options)}</p>
                <p>{`${selectedTimes[0]} - ${
                  selectedTimes[selectedTimes.length - 1]
                }`}</p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <h3 className="h3-lt">Total :</h3>
              <div>
                <div className="flex text-center body-md-norm  w-[250px] h-[40px] py-2 rounded-xl bg-primary-200 text-black items-center justify-center mb-2">
                  <h4 className="h4-med">{`Rp.${getHarga()}`}</h4>
                </div>
                <Button onClick={() => setShowPopup(true)} className={"w-[250px]"}>
                  <p className="beranda-lg-norm ">Lanjut ke Pembayaran</p>
                </Button>
              </div>
            </div>
          </div>
        </InputCard>
      </div>
    </div>
  );
};

export default PilihJadwal;
