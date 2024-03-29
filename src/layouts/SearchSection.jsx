import React, { useEffect, useState } from "react";
import InputCard from "../components/InputCard";
import searchbg1 from "../assets/searchbg1.png";
import { useNavigate } from "react-router-dom";
import SearchComp from "../components/SearchComp";
import LapanganCard from "../components/LapanganCard";
import LongFilterButton from "../components/LongFilterButton";
import { BsArrowRight } from "react-icons/bs";
import { TbSoccerField } from "react-icons/tb";
import Button from "../components/Button";
import TabSelect from "../components/TabSelect";
import axios from "axios";
import TemanCard from "../components/TemanCard";
import Cookies from "js-cookie";
import CoachCard from "../components/CoachCard";

const SearchSection = ({ head, desc, bgColor, setSelectedLapangan, mode, setSelectedTeman, modeFitur, olahraga, kota, setOlahraga, setKota}) => {
  const [filter, setFilter] = useState("");
  const [namaKota, setNamaKota] = useState("");
  const [namaOlahraga, setNamaOlahraga] = useState("");
  const [listOlahraga, setListOlahraga] = useState([]);
  const [listLapangan, setListLapangan] = useState([]);
  const [listTeman, setListTeman] = useState([]);
  const [listKota, setListKota] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const navigate = useNavigate()
  const getKota = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/showKota`)
      .then((result) => {
        setListKota(result.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const getKategori = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/showKategori`)
      .then((result) => {
        setListOlahraga(result.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const getLapangan = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/showLapangan/${olahraga}/${kota}`)
      .then((result) => {
        setListLapangan(result.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const getLapanganTerendah = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASEURL}/showLapanganTerendah/${olahraga}/${kota}`
      )
      .then((result) => {
        setListLapangan(result.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const getLapanganTertinggi = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASEURL}/showLapanganTertinggi/${olahraga}/${kota}`
      )
      .then((result) => {
        setListLapangan(result.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const getTeman = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/cariTeman/${olahraga}/${kota}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((result) => { 
        // console.log(listTeman)      
        setListTeman(result.data.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault(e);
    setIsSearched((prev) => !prev);
    switch (mode) {
      case 0:
        getLapangan();
        break;
      case 1:
        getTeman();
        break;
      default:
        break;
    }
  };

  const handleFilter = () => {
    if (filter === 0) {
      getLapanganTertinggi()
    } else if (filter === 1){
      getLapanganTerendah()
    } else {
      getLapangan()
    }
  };

  useEffect(() => {
    setListOlahraga(getKategori());
    setListKota(getKota());
  }, []);

  return (
    <>
      {isSearched ? (
        <div className="w-full pt-[75px]">
          <TabSelect nav1={modeFitur[mode]}/>
          {mode == 0 && (
            <div className="flex items-end justify-between mx-20 mb-2">
              <div className="flex items-center">
                <TbSoccerField className="text-[40px] mr-2" />

                <div className="">
                  <h3>Pencarian {modeFitur[mode]}</h3>
                  <p className="flex items-center">
                    {namaKota} <BsArrowRight className="mx-2" /> Lapangan{" "}
                    {namaOlahraga}
                  </p>
                </div>
              </div>
              <Button width={'180px'} className="mb-2" onClick={handleSearch}>
                Ganti
              </Button>
            </div>
          )}

          {mode == 0 &&
          <div className="flex text-end h-[40px] justify-end items-center px-20 mt-8">
             <LongFilterButton setFilter={setFilter} handleFilter={handleFilter}/>
            <p>Filter</p>
          </div>}
          
          <div className="px-20 py-2 ">
            <p>Hasil pencarian:</p>

            <p>
              {mode == 0
                ? `${listLapangan.length} hasil untuk lapangan ${namaOlahraga} di kota
              ${namaKota}`
                : `${listTeman.length} hasil untuk kota dan olahraga yang di pilih`}
            </p>

            <div className="flex flex-col justify-center my-4">
              {listLapangan.map((item, i) => {
                return (
                  <LapanganCard
                    key={i}
                    nama={item.namaLapangan}
                    harga={item.harga}
                    jamBuka={item.jamBuka}
                    jamTutup={item.jamTutup}
                    lokasi={item.lokasi}
                    id={item.id}
                    setSelectedLapangan={setSelectedLapangan}
                  />
                );
              })}
              {listTeman.map((item, i) => {
                return (
                  <div className="grid grid-cols-4">
                    <TemanCard
                      setSelectedTeman={setSelectedTeman}
                      key={i}
                      id={item.id}
                      jk={item.user.jenisKelamin}
                      nama={item.user.name}
                      desc={item.deskripsi}
                      umur={item.user.umur}
                    />
                  </div>
                );
              })}
              
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen">
          <img
            src={searchbg1}
            alt=""
            className="absolute h-screen w-full object-cover "
          />
          <div className="flex justify-end w-full h-screen ">
            <div className="flex w-6/12 h-screen items-center justify-center pr-16">
              <InputCard
                className="absolute w-[550px] h-[420px] "
                bgColor={bgColor}
              >
                <SearchComp
                  handleSearch={handleSearch}
                  setNamaKota={setNamaKota}
                  setNamaOlahraga={setNamaOlahraga}
                  setKota={setKota}
                  setOlahraga={setOlahraga}
                  listKota={listKota}
                  listOlahraga={listOlahraga}
                  head={head}
                  desc={desc}
                />
              </InputCard>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchSection;
