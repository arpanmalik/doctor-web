import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar2";
import AppointmentSlider from "./AppointmentSlider";
import Footer from "../Footer/Footer";
import {useNavigate} from "react-router-dom";

const AppointmentAll = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <>
            <Navbar />
            <Searchbar />
            <div className="appointment3">
                <AppointmentSlider head="Local Doctors" />
                <button className="appointment3Btn" onClick={()=>navigate("/appointment-all")}>See All</button>
            </div>
            <div className="appointment3">
                <AppointmentSlider head="Cardiologists" />
                <button className="appointment3Btn" onClick={()=>navigate("/appointment-all")}>See All</button>
            </div>
            <div className="appointment3">
                <AppointmentSlider head="Allergies" />
                <button className="appointment3Btn" onClick={()=>navigate("/appointment-all")}>See All</button>
            </div>
            <div className="appointment3">
                <AppointmentSlider head="Gynaecologists'" />
                <button className="appointment3Btn" onClick={()=>navigate("/appointment-all")}>See All</button>
            </div>
            <Footer />
        </>
    )
}

export default AppointmentAll;