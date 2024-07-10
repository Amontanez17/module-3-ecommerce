import React from "react";
import { Link } from "react-router-dom";
import "./Style/Hero.css";
// import "../fonts/Balgin/Fontspring-DEMO-balgin-black.otf";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Discover your new favorite beer</h1>
          <p>
            Crafting Unforgettable Moments, One Sip at a Time: Explore Our
            Curated Collection of Artisanal Brews and Elevate Your Beer
            Experience to New Heights of Flavor and Exploration!
          </p>
        </div>
        <div className="hero-button-container"></div>
        <Link to={"/products"}>
          {" "}
          <button className="hero-button">Shop</button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
