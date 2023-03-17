import React from "react";
import { Navigate } from "react-router-dom";
import SearchSection from "../layouts/SearchSection";
import Utama from "../layouts/Utama";

const CariTeman = ({setSelectedTeman, modeFitur, getSearchData, olahraga, kota, setOlahraga, setKota}) => {
  
  return (
    <div className="">
      <Utama>
        <SearchSection
          head={"Cari Teman"}
          desc={"Isi dengan kota dan jenis olahraga yang sesuai minat kamu"}
          setSelectedTeman={setSelectedTeman}
          bgColor={"nav-blue"}
          mode={1}
          modeFitur={modeFitur}
          getSearchData={getSearchData}
          olahraga={olahraga}
          kota={kota}
          setOlahraga={setOlahraga}
          setKota={setKota}
        />
      </Utama>
    </div>
  );
};

export default CariTeman;
