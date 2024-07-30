import React from 'react'
import img from '../../assets/avataaars.svg'

export default function StartFrameWork() {
  return (
    <>
      <div className='bg-[#1ABC9C] text-white py-3 flex flex-col items-center'>
          <img src={img} className='w-[20%]' alt="avaterImage" />
          <h1 className='font-bold text-4xl my-4'>START FRAMEWORK</h1>
          <div className='flex items-center justify-center my-4'>
              <div className='border-2 border-white w-[60px]'></div>
              <i class="fa-solid fa-star mx-3"></i>
              <div className='border-2 border-white w-[60px]'></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
