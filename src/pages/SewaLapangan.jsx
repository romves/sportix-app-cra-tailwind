import React from 'react'
import SearchSection from '../layouts/SearchSection'
import Utama from '../layouts/Utama'

const SewaLapangan = () => {
  //get lapangan 
  //show kota 
  //search lapangan
  return (
    <div className=''>
      <Utama>
         <SearchSection head={'Cari Lapangan'} desc={'Isi dengan kota dan jenis olahraga yang sesuai minat kamu'}/>
      </Utama> 
    </div>
  )
}

export default SewaLapangan