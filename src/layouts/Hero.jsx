import React from 'react'
import Button from '../components/NavButton'

const Hero = () => {
  return (
    <div className='bg-slate-700 h-[768px] flex items-center pl-28'>
      <div className='py-10 pr-20 w-[850px] h-[500px]'>
      <p className='text-orange-600 text-lg'>Halo user, selamat datang</p>
        <h1 className='text-white text-[75px] text'>Mau olahraga apa hari ini?</h1>
        <h4 className='text-white my-4'>Pesan lapangan, cari partner dan personal trainer di sini</h4>
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