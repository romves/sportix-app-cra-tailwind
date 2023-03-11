import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Auth/Login";
import NotFound from "./pages/NotFound";
import Signup from "./Auth/Signup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SewaLapangan from "./pages/SewaLapangan";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sewa" element={<SewaLapangan />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
