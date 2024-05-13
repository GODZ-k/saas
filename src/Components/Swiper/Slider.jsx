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
    <section className="section-blue section-top-border" id="showcase">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center padding-bottom-40">
            <h2 className="section-title white-text font-bold text-3xl">How To Use Square</h2>
            <p className="section-subtitle white">
              Here are a few examples of how you can use our software.
            </p>
          </div>
        </div>
      </div>
      <div className="showcase-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 padding-top-10">
              <div
                id="carouselIndicators"
                className="carousel slide carousel-showcase"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carouselIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                    { sliderOne.map((slide,index)=>(
                          <div className="col-md-4 col-sm-4 col-xs-6" key={index}>
                          <figure className="gallery-item">
                            <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                              <a className="popup2" href={slide.image}>
                                <img
                                  src={slide.image}
                                  className="width-100"
                                  alt="pic"
                                />
                                <span className="eye-wrapper">
                                  <i className="fa fa-search-plus eye-icon"></i>
                                </span>
                              </a>
                            </div>
                            <div className="portfolio-box">
                              <h3>
                                <a href="#">{slide.title}</a>
                              </h3>
                              <p className="portfolio-info">{slide.content}</p>
                            </div>
                          </figure>
                        </div>
                    ))}
                  
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                   {sliderTwo.map((slide,index)=>(
                       <div className="col-md-4 col-sm-4 col-xs-6" key={index}>
                       <figure className="gallery-item">
                         <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                           <a className="popup2" href={slide.image}>
                             <img
                               src={slide.image}
                               className="width-100"
                               alt="pic"
                             />
                             <span className="eye-wrapper">
                               <i className="fa fa-search-plus eye-icon"></i>
                             </span>
                           </a>
                         </div>
                         <div className="portfolio-box">
                           <h3>
                             <a href="#">{slide.title}</a>
                           </h3>
                           <p className="portfolio-info">{slide.content}</p>
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
