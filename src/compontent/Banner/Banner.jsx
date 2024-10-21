import React from "react";
import postboxlogo from "../../assets/postboxlogo.jpeg";
import "./banner.css";
export const Banner = () => {
  return (
    <div className="banner">
      <div className="bimage">
        <img src={postboxlogo} alt="Hero" />
        <p>
          EZIO: Revolutionizing travel with personalized itineraries, social
          connections, and seamless planning in one app.
        </p>
      </div>
    </div>
  );
};

export const Banner1 = () => {
  return (
    <div className="banner1">
      <div className="bimage1">
        <p>
          EZIO: Revolutionizing travel with personalized itineraries, social
          connections, and seamless planning in one app.
        </p>
      </div>
    </div>
  );
};
export const Banner2 = () => {
  return (
    <div className="banner3">
      <div className="bimage3">
        <h1>Terms and Conditions</h1>
        {/* <p>Home & Terms and Conditions</p> */}
      </div>
    </div>
  );
};
export const Banner3 = () => {
  return (
    <div className="banner4">
      <div className="bimage4">
        <h1>Return and Refund Policy  </h1>
        {/* <p>Home & Refundpolicy Policy</p> */}
      </div>
    </div>
  );
};
export const Banner4 = () => {
  return (
    <div className="banner4">
      <div className="bimage4">
        <h1>Privacy and Policy  </h1>
        {/* <p>Home & Refundpolicy Policy</p> */}
      </div>
    </div>
  );
};
export default Banner3;
