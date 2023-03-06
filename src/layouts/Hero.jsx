import React from 'react'

const Hero = () => {
  return (
    <div className='bg-slate-700 h-[700px] py-24 px-20'>
      <div className='py-10 pr-20 w-[850px] h-[500px]'>
      <p className='text-orange-600 text-lg'>Halo user, selamat datang</p>
        <h1 className='text-white text-[75px] text'>Mau olahraga apa hari ini?</h1>
        <h4 className='text-white my-4'>Pesan lapangan, cari partner dan personal trainer di sini</h4>
        <div className='grid grid-cols-2 max-w-[300px]'>
          <button className='bg-orange-600 mr-3 mb-3 text-white text-lg p-2 rounded-md'>Sewa lapangan</button>
          <button className='bg-orange-600 mr-3 mb-3 text-white text-lg p-2 rounded-md'>Cari Partner</button>
          <button className='bg-orange-600 mr-3 mb-3 text-white text-lg p-2 rounded-md'>Cari Coach</button>
          <button className='bg-orange-600 mr-3 mb-3 text-white text-lg p-2 rounded-md'>Questions?</button>
        </div> 
      </div>
    </div>
  )
}

export default Hero