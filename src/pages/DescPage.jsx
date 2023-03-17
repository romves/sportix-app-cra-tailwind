import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPersonPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DescBox from "../components/DescBox";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";
import imagedtteman from "../assets/imagedtteman.png";

const DescPage = ({ selectedLapangan, mode, selectedTeman}) => {
  const [descData, setDescData] = useState({
    nama: "",
    harga: "",
    lokasi: "",
    gambar: "",
  });
  const navigate = useNavigate();
  const handleSewa = () => {
    navigate("/checkout");
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
    <>
      <Utama>
        <div className="pt-[75px]">
          {mode == 0 ? (
            <div>
              <TabSelect nav2={descData.nama} />
              <div className="flex mb-2 h-[300px]">
                <img src={descData.gambar} alt="" />
              </div>
              <div className="mb-2">
                <div className="flex justify-center">
                  <DescBox descData={descData} handleSewa={handleSewa} />
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <TabSelect nav2={"nama"} />
              <div className="my-8">
                <div className="mx-20 flex h-full w-[1100px] bg-primary-100 rounded-xl">
                  <div className="rounded-xl py-6 pl-6">
                    <img
                      src={imagedtteman}
                      alt="gambar"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="px-6 py-2 beranda-lg-norm w-[600px]">
                    <h3 className="mt-6">Jessica Chastain</h3>
                    <p className="beranda-lg-transp mb-2">
                      (P/29) Malang, Jawa Timur <br /> Senin 17.00 - 20.00
                    </p>

                    <p>Olahraga :</p>
                    <ul>
                      <li>Badminton</li>
                      <li>Futsal</li>
                    </ul>

                    <h4 className="h4-med mt-4">Deskripsi</h4>
                    <p>
                      Saya baru saja pindah di Malang. Saat ini saya sedang
                      fokus untuk berlatih olahraga badminton dan lari karena
                      saya ingin mengikuti marathon tahun ini. Saya lebih suka
                      lari di alam (outdoor). Target lari saya setiap hari
                      adalah 10 km dan saya biasa lari sebanyak 4 kali seminggu.
                    </p>

                    <h4 className="h4-med mt-4">Ingin berolahraga bersama?</h4>
                    <p>Tambahkan teman dan berolahraga bersama.</p>
                    <Button width="320px" className={"h-[65px] mt-6 mb-4 "}>
                      <p className="mx-2 beranda-lg-norm">Tambahkan teman</p>
                      <BsPersonPlus className="text-2xl"/>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Utama>
    </>
  );
};

export default DescPage;
