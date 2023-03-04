import React from 'react'

const PartnerCard = () => {
  return (
    <div className='w-[200px] h-[220px] bg-orange-200 mx-1 items-center justify-center text-center rounded-xl'>
      <img className='m-auto mt-3 rounded-full w-[110px] h-[110px] object-cover' src="https://cdn1-production-images-kly.akamaized.net/EKfXOwbAeJU3LaB7zgubCKbkTs0=/428x0:2114x1686/1200x900/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3550175/original/062608900_1629850619-000_9KQ27W.jpg" alt="" />
      <h1 className='font-bold'>Sinta Putri S, 19</h1>
      <h2 className='font-bold text-sm'>Badminton</h2>
      <h2 className='font-bold text-xs mb-1'>Malang</h2>
      <button className='bg-orange-300 rounded-full text-white text-[10px] py-1 px-3 font-bold'>Hubungi</button>
    </div>
  )
}

export default PartnerCard