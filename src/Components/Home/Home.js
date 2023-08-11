import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import UpperSlider from "./UpperSlider";
import BottomSlider from "./BottomSlider";
import Footer from "../Footer/Footer";
import {useNavigate} from "react-router-dom";
// import TestSlider from "../TestSlider/TestSlider";

const Home = () => {
  const navigate = useNavigate();
  const data = [
    {
      image: "./Image/2.png",
      button: "Book Appointment",
    },
    {
      image: "./Image/3.png",
      button: "Video Consultant",
    },
    {
      image: "./Image/4.png",
      button: "Medicines",
    },
    {
      image: "./Image/5.png",
      button: "Lab Test",
    },
    {
      image: "./Image/6.png",
      button: "Insurance",
    },
    {
      image: "./Image/7.png",
      button: "Doctor Consultant",
    },
  ];
  return (
    <>
      <Navbar />
      <Searchbar />
      <UpperSlider />
      <div className="home1">
        <h4>What we do</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="home2">
          {data?.map((ele, i) => (
            <div className="card">
              <img src={ele?.image} alt=""/>
              <button onClick={()=>navigate("/appointment")}>{ele?.button}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="home3">
        <img src="./Image/10.png" alt="" />
      </div>
      <div className="home4">
        <BottomSlider />
      </div>
      <div className="homeTest">
        <div className="testo1">
          <h6>Testimonials</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="testo2">
          <div className="testoCard">
            <h5>Loren Ipsum Id best Platform out there</h5>
            <p>It has been close to a decade since Loren Ipsum is assisting me in all my Forex needs. What an 
              incredible journey it has been with Loren ipsum. 
            </p>
            <hr />
            <div className='testoCard2'>
              <img src="./Image/15.png" alt=""/>
              <div className="testoStar">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="testoCard">
            <h5>Loren Ipsum Id best Platform out there</h5>
            <p>It has been close to a decade since Loren Ipsum is assisting me in all my Forex needs. What an 
              incredible journey it has been with Loren ipsum. 
            </p>
            <hr />
            <div className='testoCard2'>
              <img src="./Image/15.png" alt=""/>
              <div className="testoStar">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
