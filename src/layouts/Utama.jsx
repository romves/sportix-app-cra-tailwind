import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Utama = ({children}) => {
  return (
    <div>
        <Navbar />
        
        {children}
        <Footer />
    </div>
  )
}

export default Utama