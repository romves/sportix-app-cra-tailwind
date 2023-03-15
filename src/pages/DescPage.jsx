import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DescBox from "../components/DescBox";
import TabSelect from "../components/TabSelect";
import DiscountSection from "../layouts/DiscountSection";
import Utama from "../layouts/Utama";

const DescPage = ({selectedLapangan}) => {
  const [descData, setDescData] = useState({
    nama: '',
    harga: '',
    lokasi: '',
    gambar: ''

  })
  const navigate = useNavigate();
  const handleSewa = () => {
    navigate('/checkout')
  };

  const getLapanganDesc = async() => {
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/showLapanganById/${selectedLapangan}`)
      .then((result) => {
        const data = result.data.data;
        console.log(result)
        setDescData({
          nama: data.namaLapangan,
          harga: data.harga,
          lokasi: data.lokasi,
          gambar: data.gambar,
        }
        )
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getLapanganDesc()
  }, [])

  return (
    <>
      <Utama>
          <div className="pt-[75px]">
            <TabSelect />
            <div>
              <div className="flex mb-2 h-[300px]"><img src={descData.gambar} alt=""/></div>
              <div className="mb-2">
                <div className="flex justify-center">
                  <DescBox descData={descData} handleSewa={handleSewa}/>
                </div>
              </div>
              
            </div>
          </div>
      </Utama>
    </>
  );
};

export default DescPage;
