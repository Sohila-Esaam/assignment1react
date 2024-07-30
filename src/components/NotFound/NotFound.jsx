import React from 'react'
import img from '../../assets/error.avif'

export default function NotFound() {
  return (
    <>
      <div className="w-[80%] mx-auto flex justify-center items-center py-6">
        <img src={img} className='w-[60%]' alt="errorImage" />
      </div>
    </>
  )
}
