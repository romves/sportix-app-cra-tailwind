import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Salendar from "../components/Salendar";
import FilterButton from "../components/FilterButton";
import InputCard from "../components/InputCard";
import ListWaktu from "../components/ListWaktu";
import LongFilterButton from "../components/LongFilterButton";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";
import Calendar from "react-calendar";
import "../pages/calendar.css";
import axios from "axios";
import alat from "../assets/alat.png";

const Checkout = ({ jamBuka, jamTutup, selectedLapangan }) => {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedNoPilLapangan, setSelectedNoPilLapangan] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [descData, setDescData] = useState({
    nama: "",
    harga: 0,
    lokasi: "",
    gambar: "",
    buka: 0,
    tutup: 0,
  });
  const options = { day: "numeric", month: "long", year: "numeric" };

  console.log(selectedTime);

  const handleCheckout = async () => {
    /* await axios
      .post(`${process.env.REACT_APP_BASEURL}/checkout`, {
        
      })
      .then((result) => {
        const data = result.data.data;
        console.log(result);
        setDescData({
          nama: data.namaLapangan,
          harga: data.harga,
          lokasi: data.lokasi,
          gambar: data.gambar,
          buka: data.jamBuka,
          tutup: data.jamTutup,
        });
      })
      .catch((error) => {
        console.log(error);
      }); */
  };

  const getLapanganDesc = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASEURL}/showLapanganById/${selectedLapangan}`
      )
      .then((result) => {
        const data = result.data.data;
        console.log(result);
        setDescData({
          nama: data.namaLapangan,
          harga: data.harga,
          lokasi: data.lokasi,
          gambar: data.gambar,
          buka: data.jamBuka,
          tutup: data.jamTutup,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLapanganDesc();
  }, []);

  return (
    <Utama>
      <div className="pt-[75px]">
        {
          <>
            {/* <InputCard className="absolute w-[400px] h-[300px]">
              <div className="flex flex-col items-center">
                <img src={alat} alt="gambar" className="w-[130px]"/>
                <p className="mb-4 w-[150px] text-center">Apakah anda juga ingin menyewa alat?</p>
                <div className="flex">
                  <Button className={'w-[154px] mr-6'}>YA</Button>
                  <Button className={'w-[154px]'}>TIDAK</Button>
                </div>
              </div>
            </InputCard> */}
            <InputCard className="absolute w-[580px] h-[280px] justify-center text-center">
              <h4 className="h4-nor">Daftar alat yang disewakan oleh pihak lapangan</h4>
              <div className="flex justify-center my-2">
                <div className="mr-20">
                  <span className="h4-nor">Bola</span>
                  <div className="flex item-center text-center justify-center w-20 mt-2 ">
                    <button className="mt-2"> - </button>
                    <div className="flex justify-center text-center items-center rounded-full shadow-md h-10 w-10 bg-primary-200 mx-2">
                      1
                    </div>
                    <button> + </button>
                  </div>
                  {'20000'}
                </div>
                <div>
                <span className="h4-nor">Cone</span>
                  <div className="flex item-center text-center justify-center w-20 mt-2">
                    <button className="mt-2"> - </button>
                    <div className="flex justify-center text-center items-center rounded-full shadow-md h-10 w-10 bg-primary-200 mx-2">
                      1
                    </div>
                    <button> + </button>
                  </div>
                  {'5000'}
                </div>
              </div>
              <div className="flex items-center justify-center mb-2"><Button>Lanjut ke Pembayaran</Button></div>
              <p className="body-md-norm">Waktu penyewaan alat <span>bebas</span> , sesuai <span>waktu peminjaman</span> lapangan</p>
            </InputCard>
          </>
        }
        <TabSelect />
        <div className="h-[800px] px-20 pt-8">
          <h3 className="mb-5">Pilih Jadwal sewa dan lapangan</h3>
          <LongFilterButton />
          <div className="flex">
            <div className={"w-7/12"}>
              <div>
                <div className="my-6">
                  <Calendar onChange={setSelectedDate} value={selectedDate} />
                </div>
                <h3>Waktu</h3>
                <div>
                  <ListWaktu
                    setSelectedTime={setSelectedTime}
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
                    <p>07</p>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <h3 className="h3-lt">Total :</h3>
                  <div>
                    <div className="flex text-center body-md-norm  w-[250px] h-[40px] py-2 rounded-xl bg-primary-200 text-black items-center justify-center mb-2">
                      <h4 className="h4-med">Rp140.000</h4>
                    </div>
                    <Button
                      onClick={() => handleCheckout()}
                      className={"w-[250px]"}
                    >
                      <p className="beranda-lg-norm ">Lanjut ke Pembayaran</p>
                    </Button>
                  </div>
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
