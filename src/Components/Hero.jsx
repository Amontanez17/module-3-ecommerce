import React from "react";
import { Link } from "react-router-dom";
import "./Style/Hero.css";
import "../App.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Discover your new favorite beer</h1>
          <p>
            Crafting unforgettable moments, one sip at a time. Explore our
            curated collection of artisanal brews and elevate your beer
            experience to new heights of flavor and exploration!
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
