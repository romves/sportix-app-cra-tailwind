import React from 'react'

const CoachCard = () => {
  return (
    <div className='w-[220px] h-[350px] bg-orange-500 mx-1 rounded-xl'>
        <img className='rounded-t-xl h-[210px] w-[230px] object-cover' src="https://petapixel.com/assets/uploads/2022/09/SportsPhotographerBasketball3-800x800.jpeg" alt="" />
        <div className='p-2'>
            <h2 className='text-white text-sm'>Muamar Qadafi R - Badminton</h2>
            <h2 className='text-white text-sm'>Malang- Jawa Timur</h2>
            <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.. Commodi tempore dol</p>
        </div>
        <div className='flex justify-between px-3 items-center'>
            <p className='text-white '>*****</p>
            <button className='bg-orange-300 px-3 py-1 text-white rounded-full text-xs '>Know more</button>
        </div>
    </div>
  )
}

export default CoachCard