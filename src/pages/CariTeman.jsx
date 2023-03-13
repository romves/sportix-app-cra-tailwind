import React from "react";
import SearchSection from "../layouts/SearchSection";
import Utama from "../layouts/Utama";

const CariTeman = () => {
  return (
    <div className="">
      <Utama>
      <SearchSection head={"Cari Teman"} desc={'Isi dengan kota dan jenis olahraga yang sesuai minat kamu'} bgColor={'nav-blue'}/>
      </Utama>
    </div>
  );
};

export default CariTeman;
