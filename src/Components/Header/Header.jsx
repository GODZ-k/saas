import React from 'react';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between h-24 items-center'>
          <div className='flex '>
            <div className='flex-shrink-0 flex '>
              <span className='text-blue-800 text-3xl font-semibold'>
                SquareX
              </span>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex  space-x-4 text-lg'>
                <a
                  href='#'
                  className='text-black hover:text-blue-700   rounded-md  font-medium pl-20'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-black  hover:text-blue-700  rounded-md  font-medium pl-8'
                >
                  About
                </a>
                <a
                  href='#'
                  className='text-black hover:text-blue-700  rounded-md  font-medium pl-8'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='text-black hover:text-blue-700  rounded-md  font-medium pl-8'
                >
                  Team
                </a>
                <a
                  href='#'
                  className='text-black hover:text-blue-700 rounded-md  font-medium pl-8'
                >
                  Showcase
                </a>
                <a
                  href='#'
                  className='text-black hover:text-blue-700 rounded-md  font-medium pl-8'
                >
                  Pricing
                </a>
                <a
                  href='#'
                  className='text-black hover:text-blue-700 rounded-md  font-medium pl-8'
                >
                  Blog
                </a>
                <a
                  href='#'
                  className='text-black  hover:text-blue-700 rounded-md font-medium pl-8'
                >
                  Contact
                </a>
                <span
                  href='#'
                  className='text-white bg-blue-500 border-2 border-blue-500 hover:bg-white hover:text-blue-500 rounded-md  font-medium pr-4 pl-4 pb-3 pt-2  relative left-6 bottom-2'
                >
                  Get Started
                </span>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={toggleNavbar}
              className='inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Home
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            About
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Features
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Team
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Showcase
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Pricing
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Blog
          </a>
          <a
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Contact
          </a>
          <div className='text-white bg-blue-700 inline-block  px-3 py-2 rounded-md text-base font-medium border-2 border-blue-700 hover:bg-white hover:text-blue-700'>
            Get Started
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
