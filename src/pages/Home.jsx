import axios from "axios";
import React, { useEffect, useState } from "react";
import CoachSection from "../layouts/CoachSection";
import DiscountSection from "../layouts/DiscountSection";
import Hero from "../layouts/Hero";
import LoggedSection from "../layouts/LoggedSection";
import PartnerSection from "../layouts/PartnerSection";
import Utama from "../layouts/Utama";

const Home = ({setSelectedLapangan}) => {
  const [semuaTeman, setSemuaTeman] = useState([]);
  const [semuaLapangan, setSemuaLapangan] = useState([]);
  const getLapanganAll = async () => {
    await axios
      .get(`https://ahmadsultan.aenzt.tech/api/showSemuaLapangan`, {})
      .then((response) => {
        console.log(response.data.data);
        setSemuaLapangan(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTemanAll = async () => {
    await axios
      .get(`https://ahmadsultan.aenzt.tech/api/showSemuaTeman`, {})
      .then((response) => {
        setSemuaTeman(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTemanAll();
    getLapanganAll();
  }, []);

  return (
    <div>
      <Utama>
        <Hero />
        {window.localStorage.getItem("token") ? (
          <LoggedSection />
        ) : (
          <DiscountSection semuaLapangan={semuaLapangan} setSelectedLapangan={setSelectedLapangan}/>
        )}
        <CoachSection />
        <PartnerSection semuaTeman={semuaTeman} />
      </Utama>
    </div>
  );
};

export default Home;
