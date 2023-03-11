import React from 'react'
import NavButton from "../components/NavButton"
import imghero from '../assets/imghero.png'

const Hero = () => {
  return (
    <div className='flex h-[768px] w-full items-center'>
      <img src={imghero} alt="" className='absolute -z-10 w-full h-[768px] object-cover' />
      <div className='py-10 pr-20 w-[650px] h-[500px] mx-20'>
      <p className='text-primary-400 h4-nor'>Selamat datang!</p>
        <h1 className='text-white h1-semi'>Mau olahraga apa hari ini? </h1>
        <h4 className='text-white h4-nor my-4'>Sewa lapangan, cari teman dan berlatih bersama personal trainer di sini</h4>
        <div className='flex max-w-[300px] '>
          <NavButton rute='/sewa' label="Lapangan"/>
          <NavButton rute='/teman' label="Teman"/>
          <NavButton rute='/sewa' label="Coach"/>
        </div> 
      </div>
    </div>
  )
}

export default Hero