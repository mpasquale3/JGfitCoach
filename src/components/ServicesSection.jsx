import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <Link to="/personal-training" className="service-card">
            <h3>1:1 Personal Training</h3>
            <p>Customized sessions tailored to your goals.</p>
          </Link>
          <Link to="/nutrition-coaching" className="service-card">
            <h3>Nutrition Coaching</h3>
            <p>Personalized meal plans and guidance for optimal results.</p>
          </Link>
          <Link to="/online-programs" className="service-card">
            <h3>Online Programs</h3>
            <p>Flexible remote training you can do anytime, anywhere.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
