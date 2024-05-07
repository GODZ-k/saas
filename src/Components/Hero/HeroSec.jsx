import React from "react";

function HeroSec() {
  return (
    <div className=" bg-[#1e90ff] pt-36 pb-20 w-full">
      <div className="flex justify-center items-center flex-wrap mx-8">
        {/* section 1  */}
        <div className=" max-w-[50%] px-5">
          <h1 className="text-white pb-4">Meet Square - The World's Most Powerful SaaS Software</h1>
          <p className=" mb-7 text-[17px]"> Start using Square today and track all your data in one central location. There are no limits to how you can look at all your data.</p>
          <ul className=" mb-9 mt-3">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <button className="bg-white rounded-md px-10 py-4 text-[#056aeb] font-bold text-[18px]">Start Your Trial</button>
        </div>

        {/* section 2 */}
        <div className=" max-w-[50%] px-2">
          <img src="hero-img.png" alt=""  className=" w-full h-full"/>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
