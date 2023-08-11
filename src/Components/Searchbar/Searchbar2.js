import React from "react";
import {useNavigate} from "react-router-dom";

const Searchbar2 = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className="search10">
                <button onClick={()=>navigate(-1)}>
                    Back
                </button>
                <div className="search2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search here............................." />
                    <button>Search</button>
                </div>
                <img src="./Image/8.png" alt="" />
                <img src="./Image/9.png" alt="" />
            </div>

        </>
    )
}

export default Searchbar2;