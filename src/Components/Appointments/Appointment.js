import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import BottomSlider from "../Home/BottomSlider";

const Appointment = () => {
  return (
    <>
      <Navbar />
      <hr className="horizontalLine" />
      <Searchbar />
      <div className="appointment1">
        <div className="appointment2">
          <label>Select type of doctor</label>
          <select>
            <option value="">Select---</option>
          </select>
        </div>
      </div>
      <BottomSlider />
    </>
  );
};

export default Appointment;
