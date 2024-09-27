import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title max-w-3xl">Elevate Your Legal Strategy with Our Premier Law Firm</h1>
        {/* <p className="hero-subtitle">Paul Usoro and Co</p> */}
        <button className="hero-button">Our Practice Areas</button>
      </div>
    </section>
  );
};

export default HeroSection;