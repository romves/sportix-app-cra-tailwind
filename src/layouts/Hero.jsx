import React from 'react'

const Hero = () => {
  return (
    <div className='bg-slate-700 h-[450px]'>
      <div className='py-10 px-20 w-[700px]'>
      <p className='text-orange-600 text-lg'>Halo user, selamat datang</p>
        <h1 className='text-white text-5xl font-semibold my-3'>Mau olahraga apa hari ini?</h1>
        <p className='text-white my-4 text-lg'>Pesan lapangan, cari partner dan personal trainer di sini</p>
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