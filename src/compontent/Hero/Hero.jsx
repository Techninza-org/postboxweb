import React from "react";
import "./hero.css";
import login4 from "../../assets/login4.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={login4} alt="Hero" />
      </div>
      <div className="hero-text">
        <h1>
          <a>The PostBox Travel App</a>
        </h1>
        <p>
          🌍✨✈! The PostBox Travel App, designed for traveller’s, Discover new
          places, meet fellow travellers, and share your journey with PostBox –
          the ultimate travel social media app! 📲 is launching soon. Stay tuned
          for the ultimate travel experience!
        </p>
      </div>
    </div>
  );
};

export default Hero;
