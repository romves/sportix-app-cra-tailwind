import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getKota } from "./api";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import SewaLapangan from "./pages/SewaLapangan";

function App() {
  useEffect(() => {
    getKota()
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*"  element={<NotFound />}/>
          <Route path="/sewa" element={<SewaLapangan />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
