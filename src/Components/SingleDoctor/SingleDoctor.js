import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar2 from "../Searchbar/Searchbar2";
import {useNavigate} from "react-router-dom";

const SingleDoctor = () => {
  const navigate = useNavigate();

  const [checkboxes, setCheckboxes] = useState(Array(12).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <>
      <Navbar />
      <Searchbar2 />
      <div className="sd1">
        <div className="sd2">
          <button className="sd2Btn" onClick={()=>navigate("/profile")}>View Profile</button>
          <img src="./Image/16.png" alt="" className="sd2Img" />
          <h5>Loren Epsom</h5>
          <p>Cardiologist</p>
          <p className="sd3">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="sd4">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="sd5">
            <h5>About me</h5>
            <p>
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>
        <div className="sd6">
          <div className="sd7">
            <h5>Scheduled my visit</h5>
            <div className="sd8">
              <h6>Select the date of visit</h6>
              <button>This Week</button>
            </div>
            <div className="sd9">
              <div className="sd10">
                <p>12</p>
                <p>Mon</p>
              </div>
              <div className="sd10">
                <p>13</p>
                <p>Tue</p>
              </div>
              <div className="sd10">
                <p>14</p>
                <p>Wed</p>
              </div>
              <div className="sd11">
                <p>15</p>
                <p>Thurs</p>
              </div>
              <div className="sd10">
                <p>16</p>
                <p>Fri</p>
              </div>
              <div className="sd10">
                <p>17</p>
                <p>Sat</p>
              </div>
              <div className="sd10">
                <p>18</p>
                <p>Sun</p>
              </div>
            </div>
            <div className="sd12">
              <h6>Select time slot</h6>
              <div className="sd13">
                <div className="sd14">
                  <p>12:45 PM - 4:00 PM</p>
                </div>
                <div className="sd15">
                  <p>12:45 PM - 4:00 PM</p>
                </div>
                <div className="sd15" style={{ marginTop: "10px" }}>
                  <p>12:45 PM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="sd16">
              <h5>Reason for Appointment</h5>
              <div className="sd17">
                {checkboxes.map((isChecked, index) => (
                  <div className="sd18">
                    <label key={index}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      Loren epsom
                    </label>
                  </div>
                ))}
              </div>
              <button className="sd19">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDoctor;
