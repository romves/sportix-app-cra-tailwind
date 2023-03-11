import React from "react";
import CoachSection from "../layouts/CoachSection";
import DiscountSection from "../layouts/DiscountSection";
import Hero from "../layouts/Hero";
import LoggedSection from "../layouts/LoggedSection";
import PartnerSection from "../layouts/PartnerSection";
import Utama from "../layouts/Utama";

const Home = () => {
  return (
    <div>
      <Utama>
        <Hero />
        {window.localStorage.getItem("token") ? <LoggedSection /> : <DiscountSection />}
        <CoachSection />
        <PartnerSection />
      </Utama>
    </div>
  );
};

export default Home;