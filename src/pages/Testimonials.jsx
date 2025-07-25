// src/pages/Testimonials.jsx

import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <main className="testimonials-page">
      <div className="testimonials-container">
        <h1>What Clients Say</h1>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Coach JG pushed me to reach my goals. I've never felt stronger!"</p>
            <h4>- Alex R.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The personalized plan was exactly what I needed to stay on track."</p>
            <h4>- Jamie L.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend Coach JG! Supportive and motivating every step of the way."</p>
            <h4>- Casey M.</h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;


