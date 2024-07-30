import React, { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {

  const [isLayerVisiable , setIsLayerVisiable] = useState(false);
  const [imagePath , setImagePath] = useState('');

  function changeLayerVisible(event, image){
    setIsLayerVisiable(!isLayerVisiable);
    event.stopPropagation();
    setImagePath(image)
  }

  function LayerInvisible(){
    setIsLayerVisiable(false);
  }

  return (
    <>
      <div onClick={LayerInvisible}>
        <div className="w-[85%] m-auto text-center py-2">
        <h1 className='font-bold text-4xl my-4 text-[#2c3e50]'>PORTFOLIO COMPONENT</h1>
          <div className='flex items-center justify-center my-4'>
              <div className='border-2 border-[#2c3e50] w-[70px]'></div>
              <i class="fa-solid fa-star mx-3"></i>
              <div className='border-2 border-[#2c3e50] w-[70px]'></div>
          </div>
          <div className='grid md:grid-cols-3 gap-10 mb-6'>
              <div className='item' onClick={(e)=>{ changeLayerVisible(e, img1) }}>
                  <img src={img1} className='w-full' alt="img1" />
                  <div className='item-inner'>
                      <i class="fa-solid fa-plus text-8xl"></i>
                  </div>
              </div>
              <div className='item' onClick={(e)=>{ changeLayerVisible(e, img2) }}>
                  <img src={img2} className='w-full' alt="img1" />
                  <div className='item-inner'>
                      <i class="fa-solid fa-plus text-8xl"></i>
                  </div>
              </div>
              <div className='item' onClick={(e)=>{ changeLayerVisible(e, img3) }}>
                  <img src={img3} className='w-full' alt="img1" />
                  <div className='item-inner'>
                      <i class="fa-solid fa-plus text-8xl"></i>
                  </div>
              </div>
              <div className='item' onClick={(e)=>{ changeLayerVisible(e, img1) }}>
                  <img src={img1} className='w-full' alt="img1" />
                  <div className='item-inner'>
                      <i class="fa-solid fa-plus text-8xl"></i>
                  </div>
              </div>
              <div className='item' onClick={(e)=>{ changeLayerVisible(e, img2) }}>
                  <img src={img2} className='w-full' alt="img1" />
                  <div className='item-inner'>
                      <i class="fa-solid fa-plus text-8xl"></i>
                  </div>
              </div>
              <div className='item' onClick={(e)=>{ changeLayerVisible(e, img3) }}>
                  <img src={img3} className='w-full' alt="img1" />
                  <div className='item-inner'>
                      <i class="fa-solid fa-plus text-8xl"></i>
                  </div>
              </div>
          </div>

          <div className={`layer ${isLayerVisiable ? 'flex' : 'hidden'} `}>
              <div className="inner-box ">
                  <img src={imagePath} className='w-full' alt="" />
              </div>
          </div>

        </div>
      </div>
    </>
  )
}
