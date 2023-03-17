import React, { useEffect, useState } from "react";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";
import axios from "axios";
import Popup from "../components/Popup";
import PilihJadwal from "../layouts/PilihJadwal";
import Payment from "../layouts/Payment";
import Cookies from "js-cookie";
import CC from "../components/CC";

const Checkout = ({ jamBuka, jamTutup, selectedLapangan, userID }) => {
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [showCC, setShowCC] = useState(false);
  const [ccToken, setCCToken] = useState(null);
  const [sewaAlat, setSewaAlat] = useState(false);
  const [lanjutPembayaran, setLanjutPembayaran] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [total, setTotal] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ccNumber, setCCNumber] = useState("");
  const [ccCvv, setCCCvv] = useState("");
  const [expYr, setExpYr] = useState("");
  const [expMt, setExpMt] = useState("");
  const [descData, setDescData] = useState({
    nama: "",
    harga: 0,
    lokasi: "",
    gambar: "",
    buka: 0,
    tutup: 0,
  });
  const getHarga = () => {
    setTotal(descData.harga * selectedTimes.length);
    return descData.harga * selectedTimes.length;
  };

  const handleCC = async () => {
    console.log("helaoo");
    await axios
      .post(
        `${process.env.REACT_APP_BASEURL}/getToken`,
        {
          card_number: ccNumber,
          card_cvv: ccCvv,
          card_exp_month: expMt,
          card_exp_year: expYr,
          client_key: "SB-Mid-client-686CN2gve-6Bxz7a",
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
        setCCToken(result.data.token_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckout = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/checkout`,
        {
          idOwner: userID,
          token_id: ccToken,
          idLapangan: selectedLapangan,
          idAlat: null,
          jmlJam: selectedTimes[selectedTimes.length - 1] - selectedTimes[0],
          jamMulai: selectedTimes[0],
          jamSelesai: selectedTimes[selectedTimes.length - 1],
          harga: total,
          tanggalBooking: selectedDate.toLocaleDateString(),
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${Cookies.get('token')}` 
            // Authorization: 'Basic  U0ItTWlkLXNlcnZlci1rNzRjclBFOUJnUEVYU0dWTFJ3am9lM1Q6'
          }
        }
      )
      .then((result) => {
        console.log(result);
        console.log("sukses");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLapanganDesc = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASEURL}/showLapanganById/${selectedLapangan}`
      )
      .then((result) => {
        const data = result.data.data;
        console.log(result);
        setDescData({
          nama: data.namaLapangan,
          harga: data.harga,
          lokasi: data.lokasi,
          gambar: data.gambar,
          buka: data.jamBuka,
          tutup: data.jamTutup,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLapanganDesc();
  }, []);

  return (
    <Utama>
      <div className="pt-[75px]">
        {showPopup ? (
          <Popup
            setShowPopup={setShowPopup}
            setLanjutPembayaran={setLanjutPembayaran}
            setSewaAlat={setSewaAlat}
          />
        ) : (
          ""
        )}
        {showCC ? (
          <CC
            setShowCC={setShowCC}
            handleCC={handleCC}
            setCCNumber={setCCNumber}
            setCCCvv={setCCCvv}
            setExpMt={setExpMt}
            setExpYr={setExpYr}
          />
        ) : (
          ""
        )}
        <TabSelect />
        {lanjutPembayaran ? (
          <Payment
            total={total}
            setShowCC={setShowCC}
            handleCheckout={handleCheckout}
          />
        ) : (
          <PilihJadwal
            descData={descData}
            setSelectedTimes={setSelectedTimes}
            setSelectedDate={setSelectedDate}
            selectedTimes={selectedTimes}
            selectedDate={selectedDate}
            setShowPopup={setShowPopup}
            getHarga={getHarga}
          />
        )}
      </div>
    </Utama>
  );
};

export default Checkout;
