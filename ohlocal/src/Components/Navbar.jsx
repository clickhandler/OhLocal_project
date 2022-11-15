import React, { useEffect} from "react";
import "../Styles/Navbar.css";

import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../Redux/action";

const Navbar = () => {
  const product = useSelector((state) => state.product);
  
  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(GetProduct());
    
  }, [dispatch]);

  return (
    <>
      <div className="Navbar">
        <div className="hamlog0">
          <i className="fi fi-sr-menu-burger"></i>
        </div>
        <div className="InputSearch">
          <input type="text" placeholder="Enter here" />
          <div className="search_button">
         
            <button>search</button>
          </div>
        </div>

        <div className="contact_div">
          <div>Live Bids</div>
          <div>
          {
          product.length>0&&product.map((item,index)=>{
            return(
              <div key={index}> <img src={item.nav_bar.person_icon} alt="" /></div>
            )
          })
        }
          </div>
          <div>Help & Support</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
