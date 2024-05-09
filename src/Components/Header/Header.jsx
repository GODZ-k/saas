import React, { useState } from 'react'
import "./Header.css"

function Header() { 
  const [navbar , setNavbar] = useState(false)

  function toggleNavbar() {
    setNavbar(!navbar);
  }

  const navItems = [
    {
      name:"Home",
      slug:"/"
    },
    {
      name:"About",
      slug:"/"
    },
    {
      name:"Feature",
      slug:"/"
    },
    {
      name:"Theme",
      slug:"/"
    },
    {
      name:"Contact",
      slug:"/"
    }
  ]
  return (
   <section className=' relative bg-white w-full header'>
    <div className='  flex sm:px-3 md:px-0 md:justify-evenly items-center pt-1.5'>

      <div className=' p-2'>
        <h1 className=' text-[30px] font-bold text-[#1e90ff]'>SquareX</h1>
      </div>
      <div className={`flex items-baseline justify-start md:justify-center navbar transition-all ease-linear duration-150 md:duration-0 ${navbar ? 'openNav' : '' }`}>
        <ul className='flex flex-col md:flex-row items-baseline md:justify-center md:items-center gap-4 font-bold text-xl text-black'>
        
          {
            navItems.map((item)=>(
              <li className='pb-3'>{item.name}</li>
            ))
          }
         
        </ul>
        <button className=' text-white bg-[#1e90ff] px-5 py-3 rounded-md ml-4'>Get Started</button>  
      <button id='close' onClick={toggleNavbar} className='top-6 text-2xl  right-40 sm:right-48 z-[99999] md:hidden absolute'><i className="fa-solid fa-xmark"></i></button>
      </div>
    </div>

        <button className='top-5 right-10 text-2xl md:hidden absolute' onClick={toggleNavbar}><i className=" fa-solid fa-bars"></i></button>
   </section>
  )
}

export default Header


