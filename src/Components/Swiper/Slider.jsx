import React from 'react'

function Slider() {
  return (
    <section class="section-blue section-top-border" id="showcase">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 text-center padding-bottom-40">
                <h2 class="section-title white-text">How To Use Square</h2>
                <p class="section-subtitle white">Here are a few examples of how you can use our software.</p>
            </div>
        </div>
    </div>
    <div class="showcase-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 padding-top-10">
                    <div id="carouselIndicators" class="carousel slide carousel-showcase" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <figure class="gallery-item">
                                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                                                <a class="popup2" href="images/portfolio3.jpg">
                                                    <img src="images/portfolio3.jpg" class="width-100" alt="pic"/>
                                                    <span class="eye-wrapper"><i class="fa fa-search-plus eye-icon"></i></span>
                                                </a>
                                            </div>
                                            <div class="portfolio-box">
                                                <h3><a href="#">Team Communication</a></h3>
                                                <p class="portfolio-info">Lorem Ipsum</p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <figure class="gallery-item">
                                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                                                <a class="popup2" href="images/portfolio1.jpg">
                                                    <img src="images/portfolio1.jpg" class="width-100" alt="pic"/>
                                                    <span class="eye-wrapper"><i class="fa fa-search-plus eye-icon" ></i></span>
                                                </a>
                                            </div>
                                            <div class="portfolio-box">
                                                <h3><a href="#">Business Digitalization</a></h3>
                                                <p class="portfolio-info">Lorem Ipsum</p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <figure class="gallery-item">
                                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                                                <a class="popup2" href="images/portfolio2.jpg">
                                                    <img src="images/portfolio2.jpg" class="width-100" alt="pic"/>
                                                    <span class="eye-wrapper"><i class="fa fa-search-plus eye-icon" ></i></span>
                                                </a>
                                            </div>
                                            <div class="portfolio-box">
                                                <h3><a href="#">Process Management</a></h3>
                                                <p class="portfolio-info">Lorem Ipsum</p>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <figure class="gallery-item">
                                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                                                <a class="popup2" href="images/portfolio6.jpg">
                                                    <img src="images/portfolio6.jpg" class="width-100" alt="pic"/>
                                                    <span class="eye-wrapper"><i class="fa fa-search-plus eye-icon" ></i></span>
                                                </a>
                                            </div>
                                            <div class="portfolio-box">
                                                <h3><a href="#">Project Management</a></h3>
                                                <p class="portfolio-info">Lorem Ipsum</p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <figure class="gallery-item">
                                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                                                <a class="popup2" href="images/portfolio0.jpg">
                                                    <img src="images/portfolio0.jpg" class="width-100" alt="pic" />
                                                    <span class="eye-wrapper"><i class="fa fa-search-plus eye-icon" ></i></span>
                                                </a>
                                            </div>
                                            <div class="portfolio-box">
                                                <h3><a href="#">Project Planning</a></h3>
                                                <p class="portfolio-info">Lorem Ipsum</p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <figure class="gallery-item">
                                            <div class="popup-gallery popup-gallery-rounded portfolio-pic">
                                                <a class="popup2" href="images/portfolio4.jpg">
                                                    <img src="images/portfolio4.jpg" class="width-100" alt="pic"/>
                                                    <span class="eye-wrapper"><i class="fa fa-search-plus eye-icon"></i></span>
                                                </a>
                                            </div>
                                            <div class="portfolio-box">
                                                <h3><a href="#">Task Management</a></h3>
                                                <p class="portfolio-info">Lorem Ipsum</p>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Slider