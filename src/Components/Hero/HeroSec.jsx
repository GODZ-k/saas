import React from "react";
import "./HeroStyle.css"

function HeroSec() {
  return (
    <section class="home-section" id="home">

		<div class="container">

	        <div class="row justify-between">
	          
	            <div class="col-md-6 padding-top-60">

	          		<h1>Meet Square - The World's Most Powerful SaaS Software</h1>

	          		<p>Start using Square today and track all your data in one central location. There are no limits to how you can look at all your data.</p>

                    <ul class="home-benefits">

                        <li><i class="pe-7s-check"></i>Tendis tempor ante acu ipsum finibus.</li>

                        <li><i class="pe-7s-check"></i>Atimus etims urnatis quisle net ratione.</li>

                        <li><i class="pe-7s-check"></i>Ratione lorem nets et sequi tempor.</li>

                    </ul>

                    <a href="#" class="btn-white scrool">Start Your Free Trial</a>

	            </div>
	            <div class="col-md-6 px-[7%]">
                    <img src="hero-img.png" class="width-100 hero-images" alt="pic" />

	            </div>

	        </div>

		</div>

    </section>
  );
}

export default HeroSec;
