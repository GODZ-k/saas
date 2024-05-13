import React from "react";
import Card from "../utils/Card";

function About() {
  return (
    <section className="section-white section-top-border" id="about">

        <div className="container">

            <div className="row">

                <div className="col-md-12 text-center">

                    <h2 className="section-title text-3xl font-bold">Integrated solutions designed for small business</h2>

                    <p className="section-subtitle">Communicate with flexible tools that go where your team goes.</p>
                    
                </div>

            </div>

        </div>
        <div className="services-wrapper px-[4%] sm:px-[5%] lg:px-[5%] xl:px-[10%]"> 
            <div className="p-2 lg:p-4">
                <div className="row flex justify-center items-center wrap">
                   <Card/>
                   <Card/>
                   <Card/>
                </div>
                
            </div>

        </div>

    </section>
  );
}

export default About;
