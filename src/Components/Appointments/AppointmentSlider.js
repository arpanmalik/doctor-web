import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";

const AppointmentSlider = (props)=>{
    const navigate = useNavigate();
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
                <h5>{props.head}</h5>
                <Slider {...settings}>
                {carouselData.map((item) => (
                    <div className="appointmentSlide1" key={item.id} onClick={()=>navigate("/single-doctor")}>
                        <img src={item.image} alt={item.caption} />
                        <h6>Lorem Ipsum</h6>
                        <div className="appointmentSlide2">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>4+ year’s Experience</p>
                        <button >Book Appointment</button>
                    </div>
                ))}
                </Slider>
            </div>
        </>
    )
}

export default AppointmentSlider;