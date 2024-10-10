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
