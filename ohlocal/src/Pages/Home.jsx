import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";

import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../Redux/action";
import Bids from "./Bids";

const Home = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  // console.log(product);
  return (
    <>
      <Navbar />
      <div className="container_wrapper">
        {product.length > 0 &&
          product.map((item, index) => {
            return (
              <div key={index}>
                <div className="heading" >
                  <div>
                    {" "}
                    <img src={item.heading.svg} alt="" />
                  </div>
                  <div>
                    {" "}
                    <h1>{item.heading.heading}</h1>
                    <p>{item.heading.sub_heading}</p>
                  </div>
                </div>
                <div className="product_content">
                  <div className="details">
                    <div className="product_img">
                      <img src={item.main_product.main_product_svg} alt="" />
                    </div>
                    <div>
                      <h5>{item.main_product.product_title}</h5>
                      <p style={{ color: "lightgray" }}>
                        {item.main_product.product_pipeline}
                      </p>
                      <div style={{ display: "flex" }}>
                        <div>
                          <img
                            src={item.main_product.online_price_icon}
                            alt=""
                          />
                        </div>
                        <div>
                          {" "}
                          <h2>
                            Rs.<s>{item.main_product.online_price}</s>
                          </h2>
                        </div>
                      </div>

                      <h5>Qty:{item.main_product.quantity}</h5>
                      <h4 style={{ textDecoration: "underline" }}>
                        All Details
                      </h4>
                    </div>
                  </div>
                  <div className="status_details">
                    <h1>
                      Status <img src={item.main_product.status_icon} alt="" />
                    </h1>
                    <h4>Time Remaining</h4>
                    <p style={{ color: "red" }}>
                      {item.main_product.time_remaining} minutes{" "}
                    </p>

                    <h4 style={{ color: "lightgray", fontSize: "24px" }}>
                      BIDS PLACED | <span style={{color:"lightgreen"}}>{item.main_product.bid_placed}</span> 
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Bids />
    </>
  );
};

export default Home;
