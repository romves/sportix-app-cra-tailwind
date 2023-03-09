import React from 'react'
import Button from '../components/Button'

const PartnerCard = () => {
  return (
    <div className=" drop-shadow-lg rounded-lg bg-white w-[378px] mx-4">
      <img
        className="rounded-t-lg w-[380px] h-[265px] object-cover"
        src="https://republikseo.net/wp-content/uploads/2020/04/Genre-Fotografi-Sport-Photography.jpg"
        alt=""
      />
      <div className="items-center h-[200px] px-5 ">
        <div className="h-[100px]">
          <h4 className="h4-med">Jessica Chastain - P/29</h4>
          <h4 className="beranda-md-med">Malang</h4>
          <p className="beranda-md-norm">Saya mencari teman untuk berolahraga bowling dan basket</p>
        </div>
        <div className="text-end">
          <Button type='button' width='170px'>+</Button>
        </div>
      </div>
    </div>
  )
}

export default PartnerCard