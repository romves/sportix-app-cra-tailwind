import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPersonPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DescBox from "../components/DescBox";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";
import imagedtteman from "../assets/imagedtteman.png";
import Cookies from "js-cookie";

const DescPage = ({ selectedLapangan, mode, kota, olahraga }) => {
  const [listTeman, setListTeman] = useState([]);
  const [dataAcc, setDataAcc] = useState({});
  const [descData, setDescData] = useState({
    nama: "",
    harga: "",
    lokasi: "",
    gambar: "",
    deskripsi: "",
  });
  const navigate = useNavigate();
  const handleSewa = () => {
    navigate("/checkout");
  };
  // console.log(listTeman);
  const handleCariTeman = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/cariTeman/${olahraga}/${kota}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((result) => {
        const data = result.data.data;
        setListTeman(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleAddAccTeman = async () => {
    await axios.post(
      `${process.env.REACT_APP_BASEURL}/addAccTeman`,dataAcc,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  };

  const getLapanganDesc = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASEURL}/showLapanganById/${selectedLapangan}`
      )
      .then((result) => {
        const data = result.data.data;
        // console.log(result);
        setDescData({
          nama: data.namaLapangan,
          harga: data.harga,
          lokasi: data.lokasi,
          gambar: data.gambar,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    getLapanganDesc();
    handleCariTeman();
  }, []);

  return (
    <>
      <Utama>
        <div className="pt-[75px]">
          {mode == 0 ? (
            <div>
              <TabSelect nav2={descData.nama} />
              <div className="flex mb-2 h-[300px] mx-20">
                <img src={descData.gambar} alt="" className="border rounded-xl"/>
              </div>
              <div className="mb-2">
                <div className="flex justify-center">
                  <DescBox descData={descData} handleSewa={handleSewa} />
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <TabSelect nav1={"Teman"} to={"/cariteman"} nav2={"Nama"} />
              <div className="my-8">
                <div className="mx-20 flex h-full w-[1100px] bg-primary-100 rounded-xl">
                  <div className="rounded-xl py-6 pl-6">
                    <img
                      src={imagedtteman}
                      alt="gambar"
                      className="rounded-xl"
                    />
                  </div>

                  {listTeman.map((item) => {
                    return (
                      <div className="px-6 py-2 beranda-lg-norm w-[600px]">
                        <h3 className="mt-6">{item.user.name}</h3>
                        <p className="beranda-lg-transp mb-2">
                          ({item.user.jenisKelamin}/{item.user.umur}){" "}
                          {item.kota.NamaKota}, Jawa Timur <br />{" "}
                          {item.tanggalMain} Senin {item.jam}
                        </p>

                        <p>Olahraga :</p>
                        <ul>
                          <li>Badminton</li>
                          <li>Futsal</li>
                        </ul>

                        <div className="h-[200px]">
                          <h4 className="h4-med mt-4">Deskripsi</h4>
                          <p>{item.deskripsi}</p>
                        </div>

                        <h4 className="h4-med mt-4">
                          Ingin berolahraga bersama?
                        </h4>
                        <p>Tambahkan teman dan berolahraga bersama.</p>
                        <Button
                          width="320px"
                          onClick={() => {setDataAcc({
                            idCariTeman: item.id,
                            idOwner: item.idOwner,
                            idTeman: item.user.id,
                            status: 1,
                          }); handleAddAccTeman()}}
                          className={"h-[65px] mt-6 mb-4 "}
                        >
                          <p className="mx-2 beranda-lg-norm">
                            Tambahkan teman
                          </p>
                          <BsPersonPlus className="text-2xl" />
                        </Button>
                      </div>
                    );
                  })}
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
