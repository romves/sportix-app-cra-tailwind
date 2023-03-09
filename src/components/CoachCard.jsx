import React from 'react'
import Button from './Button'

const CoachCard = () => {
  return (
    <div className="drop-shadow-lg rounded-lg bg-white w-[378px] mx-4">
    <img
      className="rounded-t-lg w-[380px] h-[288px] object-cover"
      src="https://petapixel.com/assets/uploads/2022/09/SportsPhotographerBasketball3-800x800.jpeg"
      alt=""
    />
    <div className="items-center h-[200px] px-5 ">
      <div className="h-[120px]">
        <h4 className="h4-med">Janetter Robin</h4>
        <p className="body-text-nor">Janette adalah seorang intruktur yoga yang 
telah mengajar selama 10 tahun. Janette 
mengajar yoga mulai dari tingkat pemula.</p>
      </div>
      <div className="flex items-center align-bottom justify-between my-1">
        <p>*****</p>
        <Button type='button' width='200px'>Reservasi</Button>
      </div>
    </div>
  </div>
  )
}

export default CoachCard