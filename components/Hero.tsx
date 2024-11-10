import Image from "next/image";
import React from "react";
import "./hero.css"

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-background"></div>
      <div className="hero-content-wrapper">
        <div className="hero-left">
          <h1 className="hero-title">Governor Sindh</h1>
          <h2 className="hero-subtitle">Kamran Khan Tessori</h2>
          <h3 className="hero-secondary-title">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </h3>
          <p className="hero-text">Earn up to $5,000 / month</p>
          <p className="hero-text mb-4">Now admissions are open in Hyderabad</p>
          <div className="hero-flex-container">
            <button className="hero-button">Apply now</button>
            <div>
              <h1 className="hero-stats-title">562,143</h1>
              <p>Accepted Applications</p>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            src="/cover-photo.png"
            alt="governor sindh kamran Tissori"
            width={900}
            height={900}
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
