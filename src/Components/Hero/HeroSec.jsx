import React from "react";
import "./HeroStyle.css";
import { Link } from "react-router-dom";

function HeroSec() {
  return (
    <section className="w-full pt-20 pb-16 bg-[#1e90ff]">
      <div className="flex justify-center items-center flex-wrap p-4">
        <div className=" p-0 sm:px-9 lg:p-0 lg:max-w-[50%]">
          <h1 className=" text-white mb-3 md:w-[90%]  lg:w-[80%]">Meet Square - The World's Most Powerful SaaS Software</h1>
          <p className="text-white mb-4 md:w-[90%] lg:w-[80%]">
            Start using Square today and track all your data in one central
            location. There are no limits to how you can look at all your data.
          </p>
          <ul className="pb-3">
            <li className=" text-white mb-2.5">
            <i className="fa-regular fa-circle-check mr-2 text-[20px]"></i>Tendis tempor ante acu ipsum finibus.
            </li>
            <li className=" text-white mb-2.5">
            <i className="fa-regular fa-circle-check mr-2 text-[20px]"></i>Tendis tempor ante acu ipsum finibus.
            </li><li className=" text-white mb-2.5">
            <i className="fa-regular fa-circle-check mr-2 text-[20px]"></i>Tendis tempor ante acu ipsum finibus.
            </li>
          </ul>
          {/* <Link></Link> */}
          <a href="#" className="bg-white px-4 py-3 rounded-sm trail-btn font-bold text-[#1e90ff] trial-btn text-xl">Start Your Free Trial</a>
        </div>
        <div className=" pt-10 lg:py-0 md:max-w-[60%] lg:max-w-[50%]">
          <img src="hero-img.png" alt="" srcset="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
