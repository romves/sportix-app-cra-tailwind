import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import CoachSection from "../layouts/CoachSection";
import DiscountSection from "../layouts/DiscountSection";
import Hero from "../layouts/Hero";
import LoggedSection from "../layouts/LoggedSection";
import PartnerSection from "../layouts/PartnerSection";
import Utama from "../layouts/Utama";

const Home = ({setSelectedLapangan, userID}) => {
  const [welcome, setWelcome] = useState('')
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

  const getUserProfile = async () => {
    await axios
      .get(`https://ahmadsultan.aenzt.tech/api/userId/${userID}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setWelcome({
          name: response.data.data.name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTemanAll();
    getLapanganAll();
    getUserProfile();
  }, []);

  return (
    <div>
      <Utama >
        <Hero welcome={welcome}/>
        {Cookies.get("token") ? (
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
