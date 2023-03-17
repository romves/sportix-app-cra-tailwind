import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Auth/Login";
import NotFound from "./pages/NotFound";
import Signup from "./Auth/Signup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SewaLapangan from "./pages/SewaLapangan";
import CariTeman from "./pages/CariTeman";
import DescPage from "./pages/DescPage";
import CariCoach from "./pages/CariCoach";
import UserProfile from "./pages/UserProfile";
import axios from "axios";
import Checkout from "./pages/Checkout";
import AuthRoutes from "./routes/AuthRoutes";
import Cookies from "js-cookie";
import Utama from "./layouts/Utama";

function App() {
  const modeFitur = ["Lapangan", "Teman", "Coach"];
  const [kota, setKota] = useState("");
  const [olahraga, setOlahraga] = useState("");
  const [searchData, getSearchData] = useState();
  const [selectedTeman, setSelectedTeman] = useState("");
  const [selectedLapangan, setSelectedLapangan] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    message: "",
    status: "",
  });
  const navigate = useNavigate();
  // console.log(userID);

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("https://ahmadsultan.aenzt.tech/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response);
        Cookies.set("token", response.data.token);
        Cookies.set("expirationTime", new Date().getTime());
        navigate("/");
        if (response.data.id) {
          setUserID(response.data.id);
          // console.log(userID);
        } else {
          // console.log("siuuuuu");
        }
      })
      .catch((error) => {
        // console.log(error);
        setError(error.response.data);
      });
  };

  useEffect(() => {
    const minutes = 10 * 60 * 1000; // convert 30 minutes to milliseconds
    const token = Cookies.get("token");
    const expirationTime = Cookies.get("expirationTime");

    // console.log(Cookies.get("token"));

    if (
      token &&
      expirationTime &&
      new Date().getTime() - expirationTime < minutes
    ) {
    } else {
      Cookies.remove("token");
      Cookies.remove("expirationTime");
    }

    const interval = setInterval(() => {
      if (
        token &&
        expirationTime &&
        new Date().getTime() - expirationTime >= minutes
      ) {
        Cookies.remove("token");
        Cookies.remove("expirationTime");
        clearInterval(interval);
      }
    }, 1000);

    // console.log(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Home setSelectedLapangan={setSelectedLapangan} userID={userID} />
          }
        />
        <Route path="/coach" element={<CariCoach />} />
        <Route path="/sewa">
          <Route
            index
            element={
              <SewaLapangan
                setSelectedLapangan={setSelectedLapangan}
                modeFitur={modeFitur}
                olahraga={olahraga}
                kota={kota}
                setOlahraga={setOlahraga}
                setKota={setKota}
              />
            }
          />
          <Route
            path="desc"
            element={
              <DescPage
                selectedLapangan={selectedLapangan}
                mode={0}
                modeFitur={modeFitur}
                olahraga={olahraga}
                kota={kota}
              />
            }
          />
        </Route>

        <Route element={<AuthRoutes />}>
          <Route path="/cariteman">
            <Route
              index
              element={
                <CariTeman
                  setSelectedTeman={setSelectedTeman}
                  modeFitur={modeFitur}
                  getSearchData={getSearchData}
                  olahraga={olahraga}
                  kota={kota}
                  setOlahraga={setOlahraga}
                  setKota={setKota}
                />
              }
            />
            <Route
              path="desc"
              element={
                <DescPage
                  selectedTeman={selectedTeman}
                  mode={1}
                  modeFitur={modeFitur}
                  olahraga={olahraga}
                  kota={kota}
                />
              }
            />
          </Route>
          <Route path="/profile" element={<UserProfile userID={userID} />} />
          <Route
            path="/checkout"
            element={
              <Checkout selectedLapangan={selectedLapangan} userID={userID} />
            }
          />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/login"
            element={
              <Login
                handleLogin={handleLogin}
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
