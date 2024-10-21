import React from "react";
import "./info.css";
import abc from "../../assets/abc.png";
import b from "../../assets/b.png";
import p from "../../assets/p.png";
export const Content = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1>User Profile and Customization</h1>
        <p>
          Discover your Destination with Explore Zone! Get itineraries created
          by various itinerary vendors or create your own custom itinerary
          Choose from expertly crafted itineraries by top vendors. Explore more,
          worry less!
        </p>
      </div>
      <div className="content-image">
        <img src={p} alt="content" />
      </div>
    </div>
  );
};

export const Content1 = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1>
          Inspire Others: Share and Discover Travel Stories on PostBox Travel
          App
        </h1>
        <p>
          Our social travel platform, Inspire Others, on PostBox Travel App!
          Discover user posts, travel reels, and travellers . Share your
          journeys, get inspired by fellow travellers, let’s inspire each other
          to travel more!
        </p>
      </div>
      <div className="content-image2">
        <img src={b} alt="content" />
      </div>
    </div>
  );
};
export const Content2 = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1>
          Connect Other: Network and Travel Together on PostBox Travel App
        </h1>
        <p>
          With Connect Other on PostBox Travel App! View the locations of fellow
          travellers, connect through messaging, and coordinate your adventures.
          Meet new friends, plan trips together, and explore the world with
          like-minded explorers. Travel is better together!.
        </p>
      </div>
      <div className="content-image3">
        <img src={p} alt="content" />
      </div>
    </div>
  );
};
