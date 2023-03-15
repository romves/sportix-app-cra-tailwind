import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import Button from "./Button";
import Dropdown from "./Dropdown";

const SearchComp = ({setKota, setOlahraga, listKota, listOlahraga, handleSearch, head, desc, setNamaKota, setNamaOlahraga}) => {
  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex flex-col">
          <h1 className="h1-semi">{head}</h1>
          <p>{desc}</p>
          <div className="my-2">
            <p className="pl-10">Pilih kota</p>
            <div className="flex items-center justify-between">
              <div className="mr-4 text-xl">
                <SlLocationPin />
              </div>
              <Dropdown array={listKota} setData={setKota} setNama={setNamaKota} />
            </div>
            <p className="pl-10">Pilih olahraga</p>
            <div className="flex items-center justify-between ">
              <div className="mr-4 text-xl">
                <BsSearch />
              </div>
              <Dropdown array={listOlahraga} setData={setOlahraga} setNama={setNamaOlahraga} />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button type="submit">CARI</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchComp;
