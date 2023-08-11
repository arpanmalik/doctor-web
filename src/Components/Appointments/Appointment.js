import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import AppointmentSlider from "./AppointmentSlider";
import {useNavigate} from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="appointment1">
        <div className="appointment2">
          <label>Select type of doctor</label>
          <select>
            <option value="">Select---</option>
            <option value="">Cardiologist</option>
            <option value="">Gynaecologists</option>
            <option value="">Paediatrician</option>
            <option value="">Dermatologist</option>
            <option value="">Therapist</option>
            <option value="">Allergist</option>
          </select>
        </div>
      </div>
      <div className="appointment3">
        <h2>Our Doctor's Team</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <AppointmentSlider head="Cardiologists" />
        <button className="appointment3Btn" onClick={()=>navigate("/appointment-all")}>See All</button>
      </div>
      <div className="appointment3">
        <AppointmentSlider head="Gynaecologists" />
        <button className="appointment3Btn" onClick={()=>navigate("/appointment-all")}>See All</button>
      </div>
    </>
  );
};

export default Appointment;
