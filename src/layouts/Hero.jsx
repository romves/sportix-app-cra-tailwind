import React from 'react'
import NavButton from "../components/NavButton"
import imghero from '../assets/imghero.png'
import lap from '../assets/lap.png'
import fren from '../assets/fren.png'
import coc from '../assets/coc.png'

const Hero = () => {
  return (
    <div className='flex h-[768px] w-full justify-center text-center items-center'>
      <img src={imghero} alt="" className='absolute -z-10 w-full h-[768px] object-cover' />
      <div className='py-10 w-[650px] h-[500px] mx-20 flex flex-col items-center'>
      <p className='text-primary-400 h4-nor'>Selamat datang!</p>
        <h1 className='text-white h1-semi'>Mau olahraga apa hari ini? </h1>
        <h4 className='text-white h4-nor my-4'>Sewa lapangan, cari teman dan berlatih bersama personal trainer di sini</h4>
        <div className='flex w-[600px] justify-between'>
          <NavButton rute='/sewa' label="Lapangan"><img src={lap} alt="lap" className='rounded-full object-cover'/></NavButton>
          <NavButton rute='/teman' label="Teman"><img src={fren} alt="lap" className='rounded-full object-cover'/></NavButton>
          <NavButton rute='/coach' label="Coach"><img src={coc} alt="lap" className='rounded-full object-cover'/></NavButton>
        </div> 
      </div>
    </div>
  )
}

export default Hero