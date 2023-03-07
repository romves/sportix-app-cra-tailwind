import React from "react";
import CoachSection from "../layouts/CoachSection";
import Discount from "../layouts/DiscountSection";
import Hero from "../layouts/Hero";
import PartnerSection from "../layouts/PartnerSection";
import Utama from "../layouts/Utama";

const Home = () => {
  return (
    <div>
      {/* <h1 >Heading 1</h1>
      <h2 >Heading 2</h2>
      <h3 >Heading 3</h3>
      <h4 >Body text</h4>
      <h5 >Body text sm</h5>
      <p className='text-tiny'>Text tiny</p> */}
      <Utama>
        <Hero />
        <Discount />
        <CoachSection />
        <PartnerSection />
      </Utama>
    </div>
  );
};

export default Home;
