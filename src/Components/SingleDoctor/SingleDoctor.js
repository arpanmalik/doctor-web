import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar2 from "../Searchbar/Searchbar2";

const SingleDoctor = () => {
  return (
    <>
      <Navbar />
      <Searchbar2 />
      <div className="sd1">
        <div className="sd2">
            <button className="sd2Btn">View Profile</button>
        </div>
      </div>
    </>
  );
};

export default SingleDoctor;
