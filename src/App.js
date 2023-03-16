import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  const [selectedLapangan, setSelectedLapangan] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    message: "",
    status: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("https://ahmadsultan.aenzt.tech/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token);
        if (response.data.id) {
          setUserID(response.data.id);
          console.log(userID);
        } else {
          console.log("siuuuuu");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedLapangan={setSelectedLapangan} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/coach" element={<CariCoach />} />
          <Route path="/sewa">
            <Route
              index
              element={
                <SewaLapangan setSelectedLapangan={setSelectedLapangan} />
              }
            />
            <Route
              path="desc"
              element={<DescPage selectedLapangan={selectedLapangan} />}
            />
          </Route>

          <Route element={<AuthRoutes />}>
            <Route path="/teman" element={<CariTeman />} />
            <Route path="/profile" element={<UserProfile userID={userID} />} />
            <Route
              path="/checkout"
              element={<Checkout selectedLapangan={selectedLapangan} />}
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
      </Router>
    </>
  );
}

export default App;
