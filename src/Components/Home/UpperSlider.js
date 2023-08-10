import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpperSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Add more settings as needed
  };
  return (
    <>
      <div className="upperSlider1">
        <Slider {...settings}>
          <div className="up1">
            <h3>About Us</h3>
            <div className="up2">
              <div className="up3">
                <h1>Lorem Ipsum dolor sit amet, cons <spam>Lorem</spam> Ipsum</h1>
              </div>
              <div className="up4">
                <img src="./Image/14.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam et volutpat sit aenean varius tempor, commodo
                  facilisi. <spam>Read more...</spam>
                </p>
              </div>
            </div>
          </div>
          <div className="up1">
            <h3>Our Mission</h3>
            <div className="up2">
                <div className="up4">
                    <img src="./Image/14.png" alt="" />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam et volutpat sit aenean varius tempor, commodo
                    facilisi. <spam>Read more...</spam>
                    </p>
                </div>
              <div className="up3">
                <h1>Lorem Ipsum dolor sit amet, cons <spam>Lorem</spam> Ipsum</h1>
              </div>
            </div>
          </div>
          <div className="up1">
            <h3>Our Vision</h3>
            <div className="up2">
              <div className="up3">
                <h1>Lorem Ipsum dolor sit amet, cons <spam>Lorem</spam> Ipsum</h1>
              </div>
              <div className="up4">
                <img src="./Image/14.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam et volutpat sit aenean varius tempor, commodo
                  facilisi. <spam>Read more...</spam>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default UpperSlider;
