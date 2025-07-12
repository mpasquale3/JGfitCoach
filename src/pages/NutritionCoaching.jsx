

// src/pages/NutritionCoaching.jsx

import React from 'react';
import '../styles/NutritionCoaching.css';
import heroImage from '../images/mealPrep.png'; 

const NutritionCoaching = () => {
  return (
    <div className="service-page">
      <div 
        className="service-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>Nutrition Coaching</h1>
      </div>

      <div className="service-detail-container">
        <p>
          Fuel your body for success with customized nutrition coaching from Coach JG.
          Get meal plans, macro guidance, and accountability that fits your goals and lifestyle.
        </p>

        <h3>What’s Included:</h3>
        <ul>
          <li>Personalized meal plans tailored to you</li>
          <li>Macro & calorie guidance</li>
          <li>Bloodwork analysis (if needed)</li>
          <li>Weekly or bi-weekly check-ins</li>
          <li>Guidance for lifestyle & competition prep</li>
        </ul>

        <h3>Pricing:</h3>
        <p>Contact for plan options and pricing tiers.</p>
      </div>
    </div>
  );
};

export default NutritionCoaching;


