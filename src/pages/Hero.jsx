// src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/compPose.png'; 
import '../styles/Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Coach JG flexing on stage" className="hero-bg" />
      <div className="hero-content">
        <h1>Train With Purpose</h1>
        <p>Transform your fitness journey with Coach JG</p>
        <Link to="/booking" className="cta-button">
          Book Your Free Consult
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
