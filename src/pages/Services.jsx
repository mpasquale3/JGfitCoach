// src/pages/Services.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css'; 

const Services = () => {
  return (
    <main className="services-page">
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-grid">
          <Link to="/services/personal-training" className="service-card">
            <h2>1:1 Personal Training</h2>
            <p>Customized sessions tailored to your goals.</p>
          </Link>
          <Link to="/services/nutrition-coaching" className="service-card">
            <h2>Nutrition Coaching</h2>
            <p>Personalized meal plans and guidance.</p>
          </Link>
          <Link to="/services/online-programs" className="service-card">
            <h2>Online Programs</h2>
            <p>Flexible remote training you can do anytime, anywhere.</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;



