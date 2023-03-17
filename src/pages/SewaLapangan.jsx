import React from "react";
import SearchSection from "../layouts/SearchSection";
import Utama from "../layouts/Utama";

const SewaLapangan = ({
  setSelectedLapangan,
  modeFitur,
  olahraga,
  kota,
  setOlahraga,
  setKota,
}) => {
  //get lapangan
  //show kota
  //search lapangan
  return (
    <div className="">
      <Utama>
        <SearchSection
          head={"Cari Lapangan"}
          desc={"Isi dengan kota dan jenis olahraga yang sesuai minat kamu"}
          setSelectedLapangan={setSelectedLapangan}
          modeFitur={modeFitur}
          olahraga={olahraga}
          kota={kota}
          setOlahraga={setOlahraga}
          setKota={setKota}
          mode={0}
        />
      </Utama>
    </div>
  );
};

export default SewaLapangan;
