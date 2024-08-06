import React from "react";
import "./App.css";

const Hero = () => {
  return (
    <div className="site-hero">
          <div className="container">
              <div className="row align-items-center justify-content-center ">
        <div class="col-12 "><br/><br/><br/>
          <h1 className="header-text">
          Effective Ride bookings. <br/> Reduce wait times at bus stops
            </h1><br />
            <p className="description">Access to accurate information about arrival time and reduce time spent waiting at bus stops. Efficient routing and optimal ride booking to reduce overflow.</p>
                      <br/><button className="call-to_btn get-app btn disabled"><span className="btn-text">Get the App</span></button>
        </div>
        
              </div>
              </div>
    </div>
  );
};

export default Hero;
