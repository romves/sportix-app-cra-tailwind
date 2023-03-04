import React from 'react'
import CoachSection from '../components/CoachSection'
import Discount from '../components/DiscountSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PartnerSection from '../components/PartnerSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discount />
      <CoachSection />
      <PartnerSection />
      <Footer />
    </div>
  )
}

export default Home