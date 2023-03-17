import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import CoachCard from "../components/CoachCard";
import TabSelect from "../components/TabSelect";
import SearchSection from "../layouts/SearchSection";
import Utama from "../layouts/Utama";

const CariCoach = () => {
  const [listCoach, setListCoach] = useState([]);
  const getCoach = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/showPelatih`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((result) => {
        setListCoach(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoach();
  }, []);

  return (
    <div className="">
      <Utama>
        <div className="pt-[75px]">
          <TabSelect />
          <div className="mx-20">
            <p>Hasil pencarian:</p>
            <p>
              {`${listCoach.length} hasil untuk kota dan olahraga yang di pilih`}
            </p>
            <div className="flex flex-col justify-center">
              {listCoach.map((item) => {
                return (
                  <div className="grid grid-cols-4">
                    <CoachCard />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Utama>
    </div>
  );
};

export default CariCoach;
