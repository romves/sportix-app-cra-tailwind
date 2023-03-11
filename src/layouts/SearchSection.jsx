import React, { useState } from "react";
import InputCard from "../components/InputCard";
import searchbg1 from "../assets/searchbg1.png";
import Navbar from "../layouts/Navbar";
import { Link, useNavigate } from "react-router-dom";
import SearchComp from "../components/SearchComp";
import LapanganCard from "../components/LapanganCard";
import LongFilterButton from "../components/LongFilterButton";
import { BsArrowRight } from "react-icons/bs";
import { TbSoccerField } from "react-icons/tb";
import Button from "../components/Button";

const SearchSection = () => {
  const [kota, setKota] = useState("");
  const [olahraga, setOlahraga] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(e);
    setIsSearched((prev) => !prev);
    console.log(isSearched);
    //showLapangan/idKategori/idKota
  };

  const listOlahraga = ["Futsal", "Badminton"];

  const listKota = ["Malang", "Surabaya"];

  return (
    <>
      {isSearched ? (
        <div className="w-full ">
          <div className="bg-primary-200 px-10 py-2 mb-2">
            <Link to='/' className="beranda-lg-transp">Beranda</Link>
            {" > "}
            <Link className="beranda-lg-norm">Cari Lapangan</Link>
          </div>
          <div className="flex items-end justify-between mx-10 mb-2">
            <div className="flex items-center">
              <TbSoccerField className="text-[40px] mr-2"/>
              <div className="">
                <h3>Pencarian Lapangan</h3>
                <p className="flex items-center">
                  Malang <BsArrowRight className="mx-2" /> Lapangan Futsal
                </p>
              </div>
            </div>
            <Button className="mb-2" onClick={handleSearch}>Ganti</Button>
          </div>
          <div className="flex text-end h-[40px] justify-end items-center px-10 mt-8">
            <LongFilterButton />
            <p>Filter</p>
          </div>
          <div className="px-10 py-2 ">
            <p>Hasil pencarian:</p>
            <p>{"12"} hasil untuk lapangan futsal di kota Malang</p>
            <div className="flex flex-col justify-center my-4">
              <LapanganCard />
              <LapanganCard />
              <LapanganCard />
              <LapanganCard />
              <LapanganCard />
              <LapanganCard />
              <LapanganCard />
              <LapanganCard />
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
              <InputCard className="absolute w-[580px] h-[420px] ">
                <SearchComp
                  handleSearch={handleSearch}
                  setKota={setKota}
                  setOlahraga={setOlahraga}
                  listKota={listKota}
                  listOlahraga={listOlahraga}
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
