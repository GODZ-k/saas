import React, { useState } from 'react'
import {Input,Button} from '../index'
import "./PopupForm.css"

function PopupForm({isOpen , setIsOpen  }) {

    const togglePopup = () => {
        setIsOpen(!isOpen);
      };
  return (
  <>
    {isOpen && (
        <div className="popup md:h-auto w-[100vmin] lg:w-[130vmin]">
          <button onClick={togglePopup} className=' w-full text-end absolute right-5 top-4 text-xl font-bold'><i class="fa-solid fa-xmark"></i></button>
          <div className=" flex justify-between md:flex-row flex-col-reverse  bg-white text-black md:h-[70vh]">
            <div>
            <div className=" flex justify-center items-center p-3 md:pt-4 px-0 sm:py-3 md:p-3">
              <h1 className=" text-3xl font-bold">Start Your <span className=" text-blue-500 font-bold">free trial</span></h1>
            </div>
            <div className=" text-sm flex justify-center items-center px-2 md:px-4">
            <p className=" text-center text-sm pt-2 sm:pb-0 md:pb-3">Unlock<span className="text-blue-500 font-bold"> premium features</span> with no credit card required. Fill out the form below for instant access and start exploring our services in minutes!</p>
            </div>
            <form action="" className=' p-[10px] ms:p-0'>
              <div className=" pl-0 sm:pl-5 py-0 pt-3 md:py-3 sm:pr-2 ">
                <div className=" pr-3 sm:pr-0 text-black inline-block w-[50%] sm:mb-2.5 " >
                  <Input className="text-black w-full sm:w-[90%] placeholder:text-sm " placeholder="First name" label="First name"/>
                </div>
                <div className="  text-black inline-block w-[50%] sm:mb-2.5">
                  <Input className="text-black w-full sm:w-[90%]  placeholder:text-sm " placeholder="Last name" label="Last name"/>
                </div>
                <div className=" pr-3 sm:pr-0 text-black inline-block w-[50%] sm:mb-2.5">
                  <Input className="text-black w-full sm:w-[90%]  placeholder:text-sm " placeholder="Email or phone no" label="Email or Phone"/>
                </div>
                <div className=" text-black inline-block w-[50%] sm:mb-2.5">
                  <Input className="text-black w-full sm:w-[90%]  placeholder:text-sm " placeholder="Restaurant name" label="Restaurant name"/>
                </div>
                <div className=" pr-3 sm:pr-0 text-black inline-block mb-1 sm:mb-0 w-[50%] ">
                  <Input className="text-black w-full sm:w-[90%]  placeholder:text-sm " placeholder="Restaurant address" label="Restaurant address"/>
                </div>
                <div className=" text-black inline-block w-[50%] sm:mb-2.5">
                  <Input className="text-black w-full sm:w-[90%]  placeholder:text-sm " placeholder="GST number" label="GST ( Optional )"/>
                </div>
              </div>
              <div className=" ml-0 sm:ml-5 mb-3 text-white">
                <Button  type="submit" className=" rounded-sm w-full sm:w-36  bg-blue-500">Sign up</Button>
              </div>
            </form>
            </div>
            <div className=" w-full object-cover object-center h-[30vh] md:h-full">
              <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg" alt="" />
            </div>
          </div>
        </div>
      )}
  </>
  )
}

export default PopupForm