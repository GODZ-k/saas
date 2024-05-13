import React from "react";

function Slider() {
const sliderOne = [
    {
        image:"https://demo.epic-webdesign.com/tf-square/v3/images/portfolio3.jpg",
        title:"Team Communication",
        content:"lorem 23"
    },
    {
        image:"https://demo.epic-webdesign.com/tf-square/v3/images/portfolio1.jpg",
        title:"Team Communication",
        content:"lorem 23"
    },
    {
        image:"https://demo.epic-webdesign.com/tf-square/v3/images/portfolio2.jpg",
        title:"Team Communication",
        content:"lorem 23"
    },
    
]

const sliderTwo = [
    {
        image:"https://demo.epic-webdesign.com/tf-square/v3/images/portfolio2.jpg",
        title:"Team Communication",
        content:"lorem 23"
    },
    {
        image:"https://demo.epic-webdesign.com/tf-square/v3/images/portfolio1.jpg",
        title:"Team Communication",
        content:"lorem 23"
    },
    {
        image:"https://demo.epic-webdesign.com/tf-square/v3/images/portfolio2.jpg",
        title:"Team Communication",
        content:"lorem 23"
    },
]
  return (
    <section class="section-blue section-top-border" id="showcase">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center padding-bottom-40">
            <h2 class="section-title white-text font-bold text-3xl">How To Use Square</h2>
            <p class="section-subtitle white">
              Here are a few examples of how you can use our software.
            </p>
          </div>
        </div>
      </div>
      <div class="showcase-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 padding-top-10">
              <div
                id="carouselIndicators"
                class="carousel slide carousel-showcase"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouselIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                    { sliderOne.map((slide,index)=>(
                          <div class="col-md-4 col-sm-4 col-xs-6" key={index}>
                          <figure class="gallery-item">
                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                              <a class="popup2" href={slide.image}>
                                <img
                                  src={slide.image}
                                  class="width-100"
                                  alt="pic"
                                />
                                <span class="eye-wrapper">
                                  <i class="fa fa-search-plus eye-icon"></i>
                                </span>
                              </a>
                            </div>
                            <div class="portfolio-box">
                              <h3>
                                <a href="#">{slide.title}</a>
                              </h3>
                              <p class="portfolio-info">{slide.content}</p>
                            </div>
                          </figure>
                        </div>
                    ))}
                  
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                   {sliderTwo.map((slide,index)=>(
                       <div class="col-md-4 col-sm-4 col-xs-6" key={index}>
                       <figure class="gallery-item">
                         <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                           <a class="popup2" href={slide.image}>
                             <img
                               src={slide.image}
                               class="width-100"
                               alt="pic"
                             />
                             <span class="eye-wrapper">
                               <i class="fa fa-search-plus eye-icon"></i>
                             </span>
                           </a>
                         </div>
                         <div class="portfolio-box">
                           <h3>
                             <a href="#">{slide.title}</a>
                           </h3>
                           <p class="portfolio-info">{slide.content}</p>
                         </div>
                       </figure>
                     </div>
                   ))}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
