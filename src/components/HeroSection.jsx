import React from 'react';
import heroImage from '../images/compPose.png'; //change filename

import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Train With Purpose</h1>
        <p>Transform your fitness journey with Coach JG</p>
        <a href="#contact" className="cta-button">Book Your Free Consult</a>
      </div>
      <img src={heroImage} alt="Coach JG flexing on stage" className="hero-bg" />
    </section>
  );
};

export default HeroSection;