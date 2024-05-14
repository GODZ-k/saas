import React, { useState,useRef, useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() { 
  const [navbar , setNavbar] = useState(false)


  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavbar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function toggleNavbar() {
    setNavbar(!navbar);
  }

  const navItems = [
    {
      name:"Home",
      slug:"#hero"
    },
    {
      name:"About",
      slug:"#about"
    },
    {
      name:"Feature",
      slug:"#features"
    },
    {
      name:"Team",
      slug:"#team"
    },
    {
      name:"Showcase",
      slug:"#showcase"
    },
    {
      name:"Pricing",
      slug:"#pricing"
    },
    {
      name:"Blog",
      slug:"#blog"
    },
    {
      name:"Contact",
      slug:"#contact"
    }
  ]
  return (
   <section className=' fixed z-[9999] bg-white w-full header'>
    <div className='  flex sm:px-3 lg:px-0 lg:justify-evenly items-center py-2'>

      <div className=' p-2'>
        <h1 className=' text-[30px] font-bold text-[#1e90ff]'>SquareX</h1>
      </div>
      <div ref={ref} className={`flex items-baseline justify-start lg:justify-center navbar transition-all ease-linear duration-150 lg:duration-0 ${navbar ? 'openNav' : '' }`}>
        <ul className='flex flex-col lg:flex-row items-baseline lg:justify-center lg:items-center gap-4 font-bold text-xl text-black'>
        
          {
            navItems.map((item,index)=>(
              <li key={index} className='pb-3'><a href={item.slug}>{item.name}</a></li>
            ))
          }
         
        </ul>
        <Link to="/login" className=' text-white bg-[#1e90ff] px-5 py-3 rounded-md ml-4'>Get Started</Link>  
      <button id='close' onClick={toggleNavbar} className='top-6 text-2xl  right-40 sm:right-48 z-[99999] lg:hidden absolute'><i className="fa-solid fa-xmark"></i></button>
      </div>
    </div>

        <button className='top-5 right-10 text-2xl lg:hidden absolute' onClick={toggleNavbar}><i className=" fa-solid fa-bars"></i></button>
   </section>
  )
}

export default Header

