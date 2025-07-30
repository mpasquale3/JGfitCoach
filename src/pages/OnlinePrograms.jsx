// src/pages/OnlinePrograms.jsx

import React from 'react';
import '../styles/OnlinePrograms.css';
import heroImage from '../images/pose3.png';
import { Link } from 'react-router-dom';


const OnlinePrograms = () => {
  return (
    <div className="service-page">
      <Link to="/services" className="back-button">← Back to Services</Link>
      <div 
        className="service-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
        
      >
        <h1>Online Programs</h1>
      </div>

      <div className="service-detail-container">
        <p>
          Get expert coaching and accountability from anywhere with flexible online training options.
          Perfect for those who want maximum freedom while still having personalized support from Coach JG.
        </p>

        <h3>What’s Included:</h3>
        <ul>
          <li>Custom diet & exercise programming</li>
          <li>Remote training plans tailored to you</li>
          <li>Weekly or bi-weekly virtual check-ins</li>
          <li>Exercise critique & posing instruction</li>
          <li>24/7 member support & resources</li>
          <li>Guidance for lifestyle & competition prep</li>
        </ul>

        <h3>Pricing:</h3>
        <p>Contact for plan options and pricing tiers.</p>
      </div>
    </div>
  );
};

export default OnlinePrograms;



