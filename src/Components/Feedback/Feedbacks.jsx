import React, { useEffect } from "react";
import "./Feedback.css"
function Feedbacks() {

  useEffect(() => {
    // Auto play the carousel
    const carousel = document.querySelector("#carouselExampleIndicators");
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 4000 // adjust the interval as needed
    });

    // Pause the carousel when the user touches it
    carousel.addEventListener("touchstart", () => {
      carouselInstance.pause();
    });

    // Resume auto-playing when the user stops touching the carousel
    carousel.addEventListener("touchend", () => {
      carouselInstance.cycle();
    });

    // Clean up event listeners when the component unmounts
    return () => {
      carousel.removeEventListener("touchstart");
      carousel.removeEventListener("touchend");
    };
  }, []);

  return (
    <div>
      <div className="carousel-container carousel-container-aman">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators carousel-indicators-tanmay">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active feedback-pagination"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="feedback-pagination"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="feedback-pagination"></li>
          </ol>
          <div className="carousel-inner carouser-inner-tanmay">
            <div className="carousel-item carousel-item-aman active ">
              <img className="d-block logo  logo-aman" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="logo1" />
              <p className="para-text">
                The attention of a traveller, should be particularly turned to
                the various works of nature, to mark the distinctions of the
                climates he may explore, and to offer such useful observations
                on the different productions as may occur.
              </p>
              <h6 className="name-text">
                {" "}
                Jennifer Smith <span className="job-text"> - Web Designer</span>
              </h6>
            </div>
            <div className="carousel-item carousel-item-aman">
              <img className="d-block logo logo-aman" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="logo2" />
              <p className="para-text">
                The attention of a traveller, should be particularly turned to
                the various works of nature, to mark the distinctions of the
                climates he may explore, and to offer such useful observations
                on the different productions as may occur.
              </p>
              <h6 className="name-text">
                John Doe<span className="job-text"> - General Manager</span>
              </h6>
            </div>
            <div className="carousel-item carousel-item-aman">
              <img className="d-block logo logo-aman" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="logo3" />
              <p className="para-text">
                The attention of a traveller, should be particularly turned to
                the various works of nature, to mark the distinctions of the
                climates he may explore, and to offer such useful observations
                on the different productions as may occur.
              </p>
              <h6 className="name-text">
                Alexandra Smith
                <span className="job-text"> - App Magazine Editor</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;
