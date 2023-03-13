import React from 'react'
import SearchSection from '../layouts/SearchSection'
import Utama from '../layouts/Utama'

const CariCoach = () => {
  return (
    <div className="">
      <Utama>
      <SearchSection head={"Cari Coach"} desc={'Isi dengan kota dan jenis olahraga yang sesuai minat kamu'}/>
      </Utama>
    </div>
  )
}

export default CariCoach