import React from "react";
import {useNavigate} from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className="nav1">
                <div className="nav2">
                    <img src="./Image/1.png" alt="" />
                </div>
                <div className="nav3">
                    <p onClick={()=>navigate("/")}>Home</p>
                    <p onClick={()=>navigate("/appointment")}>Appointment</p>
                    <p>Shop</p>
                    <p>Profile</p>
                </div>
                <div className="nav4">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar;