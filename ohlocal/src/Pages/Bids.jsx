import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../Redux/action";
import "../Styles/Bids.css";
const Bids = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  // console.log(product);

  return (
    <div>
      {product.length > 0 &&
        product.map((item, index) => {
          return (
            <div key={index}>
              {item.bids.map((items, i) => {
                return (
                  <div key={i} className="container">
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "50%" }}>
                        <p>{items.shop_address}</p>
                        <h3 style={{ color: "orange" }}>
                          {" "}
                          Rs.{items.offer_price}
                        </h3>
                        <h3>Delivery & Services</h3>
                        <div style={{ display: "flex" }}>
                          <div>
                            {" "}
                            <img
                              src={items.express_delivery_icon}
                              alt=""
                            />{" "}
                            Express delivery{" "}
                          </div>
                          <div>
                            {" "}
                            <img src={items.check_icon} alt="" />
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div>
                            {" "}
                            <img src={items.return_option_icon} alt="" /> Return
                            option{" "}
                          </div>
                          <div>
                            {" "}
                            {items.return_option ? (
                              <img src={items.check_icon} alt="" />
                            ) : (
                              <img src={items.cross_icon} alt="" />
                            )}{" "}
                          </div>
                        </div>
                        <button
                          style={{
                            backgroundColor: "#5e9cd8",
                            color: "white",
                            fontSize: "20px",
                            alignItems: "center",
                            padding: "5px",
                          }}
                        >
                          <img src={items.extra_offer_icon} alt="" />
                          Extra offer
                        </button>
                        <p
                          style={{
                            marginTop: "5px",
                            lineHeight: "1.5",
                            width: "200%",
                          }}
                        >
                          {items.product_name}
                        </p>
                      </div>

                      <div className="shopImage" style={{ width: "50%" }}>
                        <img src={items.shop_image} alt="" />
                        <p>{items.shop_name}</p>
                      </div>
                    </div>
                    <button className="BuyBtn">Buy Now</button>
                    <div className="alternate_product">
                      <p>Alternate Products</p>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "20%" }}>
                          {" "}
                          <img
                            style={{ width: "100%" }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlY8y3qgoPNbEnwVGVOPWumXJVlDafKtNag&usqp=CAU"
                            alt=""
                          />
                        </div>
                        <div style={{ width: "70%" }}>
                          <p style={{ lineHeight: "1" }}>
                            {items.alternate_product_details.product_name}
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Bids;
