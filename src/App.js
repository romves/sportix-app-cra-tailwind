import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Auth/Login";
import NotFound from "./pages/NotFound";
import Signup from "./Auth/Signup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SewaLapangan from "./pages/SewaLapangan";
import CariTeman from "./pages/CariTeman"
import DescPage from "./pages/DescPage";
import CariCoach from "./pages/CariCoach";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sewa" element={<SewaLapangan />} />
          <Route path="/teman" element={<CariTeman />}/>
          <Route path="/coach" element={<CariCoach />}/>
          <Route path="/sewa/desc" element={<DescPage />}/>
          <Route path="/profile" element={<UserProfile />}/>

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
