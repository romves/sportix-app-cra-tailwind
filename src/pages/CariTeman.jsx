import React from "react";
import { Navigate } from "react-router-dom";
import SearchSection from "../layouts/SearchSection";
import Utama from "../layouts/Utama";

const CariTeman = ({setSelectedTeman, modeFitur}) => {
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
        />
      </Utama>
    </div>
  );
};

export default CariTeman;
