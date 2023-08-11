import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Footer from "../Footer/Footer";
import Product from "./Product";

const SingleProduct = () => {
  const [num, setNum] = useState(0);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const minusP = () => {
    if (num > 0) {
      setNum((prev) => prev - 1);
    }
  };
  const plusP = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="singlep1">
        <div className="singlep2">
          <div className="singlep3">
            <img src="./Image/23.png" alt="" />
            <div className="singlep12">
              <img src="./Image/18.png" alt="" />
              <img src="./Image/18.png" alt="" />
              <img src="./Image/18.png" alt="" />
              <img src="./Image/18.png" alt="" />
            </div>
          </div>
          <div className="singlep4">
            <div className="singlep5">
              <h2>Loren Epsom - Loren Epsom loren Epson</h2>
              <p>Store Name</p>
              <div className="singlep6">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>(300 Reviews)</p>
              </div>
              <div className="singlep7">
                <p>&#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <div className="singlep8">
                <p>Quantity:</p>
                <div className="singlep9">
                 <button onClick={minusP}>-</button>
                  <p>{num}</p>
                  <button onClick={plusP}>+</button>
                </div>
              </div>
              <div className="singlep10">
                <p>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                </p>
              </div>
              <div className="singlep11">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product color="#F4F4F4" head="Recommended Products" />
      <Footer />
    </>
  );
};

export default SingleProduct;
