import React from 'react'
import Checkbox from '../components/Checkbox'
import Dropdown from '../components/Dropdown'
import VoucherCard from '../components/VoucherCard'
import Utama from '../layouts/Utama'

const SewaLapangan = () => {
  return (
    <>
       <Utama>
        <div className='flex min-h-[600px] bg-slate-500 justify-center items-center'>
        <Dropdown />
        <Checkbox />
        <VoucherCard />
        </div>
       </Utama>
    </>
  )
}

export default SewaLapangan