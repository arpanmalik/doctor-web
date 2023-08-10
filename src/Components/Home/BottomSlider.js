import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BottomSlider = ()=>{
    const carouselData = [
        { id: 1, image: './Image/11.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 2, image: './Image/12.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 3, image: './Image/12.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 1, image: './Image/11.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 2, image: './Image/12.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 3, image: './Image/12.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 1, image: './Image/11.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 2, image: './Image/12.png', head: 'Doctor Name', desc:"Specialty" },
        { id: 3, image: './Image/12.png', head: 'Doctor Name', desc:"Specialty" }
        // Add more items as needed
      ];
    
      // Slick settings for customizing the carousel behavior
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // Add more settings as needed
      };
    return (
        <>
            <div className="slickSlide">
            <Slider {...settings}>
            {carouselData.map((item) => (
                <div className="slickSlide1" key={item.id}>
                    <img src={item.image} alt={item.caption} />
                    <h6>{item.head}</h6>
                    <p>{item.desc}</p>
                </div>
            ))}
            </Slider>
            </div>
        </>
    )
}

export default BottomSlider;