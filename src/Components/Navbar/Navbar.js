import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();
    const location  = useLocation();
    return (
        <>
            <div className="nav1">
                <div className="nav2">
                    <img src="./Image/1.png" alt="" onClick={()=>navigate("/")} />
                </div>
                <div className="nav3">
                    <p onClick={()=>navigate("/")} className={location.pathname==="/"? "nav5": "nav6"}>Home</p>
                    <p onClick={()=>navigate("/appointment")} className={location.pathname==="/appointment"?"nav5":"nav6"}>Appointment</p>
                    <p onClick={()=>navigate("/shop")} className={location.pathname==="/shop"?"nav5":"nav6"}>Shop</p>
                    <p onClick={()=>navigate("/profile")} className={location.pathname==="/profile"?"nav5":"nav6"}>Profile</p>
                </div>
                <div className="nav4">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar;