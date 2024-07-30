import React from 'react'

export default function About() {
  return (
    <>
      <div className='bg-main-color py-12'>
          <div className="w-[80%] m-auto text-white">
            <h1 className='font-bold text-4xl my-4  text-center'>ABOUT COMPONENT</h1>
            <div className='flex items-center justify-center my-11'>
                <div className='border-2 border-white w-[80px]'></div>
                <i class="fa-solid fa-star mx-3"></i>
                <div className='border-2 border-white w-[80px]'></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p>Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, <br />
                   CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.
                  </p>
                </div>
                <div>
                <p>Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, <br />
                   CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.
                  </p>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}
