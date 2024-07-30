import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-[#2C3E50] text-white py-24'>
          <div className='w-[90%] mx-auto grid md:grid-cols-3 gap-5'>
              <div className="item text-center">
                  <h2 className='font-semibold text-3xl'>LOCATION</h2>
                  <p className='my-2'>2215 John Daniel Drive</p>
                  <p className='mt-3'>Clark, MO 65243</p>
              </div>
              <div className="item text-center">
                  <h2 className='font-semibold text-3xl'>AROUND THE WEB</h2>
                  <div className="flex items-center justify-center mt-4">
                  <div className='iconStyle'>
                    <i class="fa-brands fa-facebook"></i>
                  </div>
                  <div className='iconStyle'>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className='iconStyle'>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className='iconStyle'>
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  </div>
              </div>
              <div className="item text-center">
                  <h2 className='font-semibold text-3xl'>ABOUT FREELANCER</h2>
                  <p className='my-2'>Freelance is a free to use, licensed Bootstrap <br /> theme created by Route</p>       
              </div>
          </div>
      </div>
      <div className='bg-[#1A252F] text-center text-white py-4'>
          <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
