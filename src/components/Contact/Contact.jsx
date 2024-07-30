import React, { useState } from 'react'

export default function Contact() {
  const [inputValue1 , setinputValue1] = useState('');
  const [inputValue2 , setinputValue2] = useState('');
  const [inputValue3 , setinputValue3] = useState('');
  const [inputValue4 , setinputValue4] = useState('');

  function handleChange1(event){
    setinputValue1(event.target.value)
  }
  function handleChange2(event){
    setinputValue2(event.target.value)
  }
  function handleChange3(event){
    setinputValue3(event.target.value)
  }
  function handleChange4(event){
    setinputValue4(event.target.value)
  }

  return (
    <>
      <div>
        <div className='w-[50%] m-auto py-2'>
        <h1 className='font-bold text-4xl my-4 text-[#2c3e50]  text-center '>CONATCT SECTION</h1>
          <div className='flex items-center justify-center mt-4 mb-11'>
              <div className='border-2 border-[#2c3e50] w-[70px]'></div>
              <i class="fa-solid fa-star mx-3"></i>
              <div className='border-2 border-[#2c3e50] w-[70px]'></div>
          </div>

          <label className={`text-main-color ${inputValue1 ? 'block' : 'hidden'}`} htmlFor="userName">userName :</label> <br />
          <input type="text" className='form-control inputStyle' onChange={handleChange1} placeholder='userName' />

          <label className={`text-main-color ${inputValue2 ? 'block' : 'hidden'}`} htmlFor="userAge">userAge :</label> <br />
          <input type="text" className='form-control inputStyle' onChange={handleChange2} placeholder='userAge'/>

          <label className={`text-main-color ${inputValue3 ? 'block' : 'hidden'}`} htmlFor="userEmail">userEmail :</label> <br />
          <input type="text" className='form-control inputStyle' onChange={handleChange3} placeholder='userEmail'/>

          <label className={`text-main-color ${inputValue4 ? 'block' : 'hidden'}`} htmlFor="userPassword">userPassword :</label> <br />
          <input type="text" className='form-control inputStyle' onChange={handleChange4} placeholder='userPassword'/>

          <button className='bg-main-color text-white py-2 px-3 rounded-md my-3'>send Message</button>
        </div>
      </div>
    </>
  )
}
