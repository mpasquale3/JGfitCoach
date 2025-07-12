
// src/pages/PersonalTraining.jsx

import React from 'react';
import '../styles/PersonalTraining.css';
import heroImage from '../images/pose2.png'; //update image

const PersonalTraining = () => {
  return (
    <div className="service-page">
      <div 
        className="service-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>1:1 Personal Training</h1>
      </div>

      <div className="service-detail-container">
        <p>
          Work directly with Coach JG through personalized 1:1 training sessions
          designed to help you reach your fitness goals faster and safer.
        </p>

        <h3>What’s Included:</h3>
        <ul>
          <li>Custom workout plans tailored to your goals</li>
          <li>Technique & form instruction</li>
          <li>Regular progress tracking</li>
          <li>Motivational support & accountability</li>
          <li>Guidance for lifestyle & competition prep</li>
        </ul>

        <h3>Pricing:</h3>
        <p>Contact for plan options and pricing tiers.</p>
      </div>
    </div>
  );
};

export default PersonalTraining;

