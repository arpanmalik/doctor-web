import React from "react";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile1">
        <h3>My Profile</h3>
        <hr />
      </div>
      <div className="profile2">
        <div className="profile3">
          <img src="./Image/17.png" alt="" />
          <p>Lorem ipsum</p>
          <div className="profile4">
            <div className="profile5">
              <p>Email:</p>
              <p>flyweis@gmail.com</p>
            </div>
            <div className="profile5">
              <p>Contact Number:</p>
              <p>1234567890</p>
            </div>
            <div className="profile5">
              <p>Address:</p>
              <p style={{width:"50%"}}>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac 
                aliquet odio mattis.
              </p>
            </div>
            <div className="profile5">
              <p>About me:</p>
              <p style={{width:"50%"}}>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac 
                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
              </p>
            </div>
          </div>
        </div>
        <button className="profileBtn">Edit</button>
      </div>
    </>
  );
};

export default Profile;
