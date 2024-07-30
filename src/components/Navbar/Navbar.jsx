import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

      <nav className='py-4 px-7 bg-[#2C3E50] text-white md:flex items-center justify-between'>
        <div>
          <Link to="/" className='font-bold text-2xl'>START FRAMEWORK</Link>
        </div>
        <div>
          <ul className='md:flex items-center justify-between'>
            <li className='p-3'><NavLink to="/about">ABOUT</NavLink></li>
            <li className='p-3'><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
            <li className='p-3'><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
        </div>
      </nav>

    </>
  )
}
