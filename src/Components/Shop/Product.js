import React from "react";
import {useNavigate} from "react-router-dom";


const Product = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="shop1" style={{background:`${props.color}`}}>
        <div className="shop2">
          <h6>{props.head}</h6>
          <div className="shop3">
            <div className="shop4" onClick={()=>navigate("/single-product")}>
              <img src="./Image/18.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/20.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/21.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/22.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/18.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/20.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/21.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/22.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/18.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/20.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/21.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
            <div className="shop4">
              <img src="./Image/22.png" alt="" />
              <h6>Loren Epsom- Loren Epsom</h6>
              <div className="shop5">
                <p>MRP &#x20B9; 500</p>
                <img src="./Image/19.png" alt="" />
              </div>
              <p>&#x20B9; 500</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
