import React from 'react'
import Button from '../components/NavButton'
import LandingPage from '../assets/LandingPage.png'

const Hero = () => {
  return (
    <div className='flex h-[768px] w-full items-center'>
      <img src={LandingPage} alt="" className='absolute -z-10 w-full h-[768px] object-cover' />
      <div className='py-10 pr-20 w-[850px] h-[500px] mx-20'>
      <p className='text-primary-400 text-lg'>Selamat datang!</p>
        <h1 className='text-white text-[75px] text'>Mau olahraga apa hari ini? </h1>
        <h4 className='text-white my-4'>Sewa lapangan, cari teman dan berlatih bersama personal trainer di sini</h4>
        <div className='grid grid-cols-2 max-w-[300px]'>
          <Button rute='/sewa'>Cari Lapangan</Button>
          <Button>Cari Partner</Button>
          <Button></Button>
          <Button>Questions?</Button>
        </div> 
      </div>
    </div>
  )
}

export default Hero