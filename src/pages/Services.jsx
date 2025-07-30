import React from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom';



const Services = () => {
  return (
    <main className="services-page">
      <div className="services-container">
        <h1>Our Services</h1>
        <p className="services-intro">
          Choose the training style that fits your lifestyle best — all backed by Coach JG's personalized approach.
        </p>

        <div className="services-grid">
          {/* Existing service cards */}
        </div>

        {/* Step-by-Step Section */}
        <section className="process-section">
          <h2>How It Works</h2>
          <div className="process-steps">
            <div className="step">
              <h3>1. Book Your Free Consult</h3>
              <p>Start with a complimentary 20-minute call to discuss your goals.</p>
            </div>
            <div className="step">
              <h3>2. Get a Personalized Plan</h3>
              <p>Coach JG creates a custom plan tailored to your needs and schedule.</p>
            </div>
            <div className="step">
              <h3>3. Stay Accountable</h3>
              <p>Ongoing support and adjustments to help you reach your goals.</p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="packages-section">
          <h2>Coaching Packages</h2>
          <div className="package-grid">
            <div className="package-card">
              <h3>Online Training</h3>
              <p>Starting at $80 per month</p>
              <ul>
                <li>Weekly / Bi-Weekly check-ins</li>
                <li>Custom workouts</li>
                <li>24/7 app access</li>
                <li> Personalized nutrition plans</li>
                <li> Exclusive email and text support</li>
              </ul>
            </div>
            <div className="package-card">
              <h3>Nutrition Coaching</h3>
              <p>$50 per month</p>
              <ul>
                <li>Meal planning & tracking</li>
                <li>Macros coaching</li>
                <li> Text and email support</li>
              </ul>
            </div>
            <div className="package-card">
              <h3>1:1 Training</h3>
              <p>$65 per session</p>
              <ul>
                <li>In-person or Zoom</li>
                <li>Progress tracking</li>
                <li>Real-time feedback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="cta-section">
          <h2>Start Your Journey</h2>
          <p>Book a free consult and get a free downloadable checklist: "Getting Started with Coach JG"</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-btn">Book Free Consult</Link>
            <a href="/resources/jgfit-starter-checklist.pdf" download className="cta-btn secondary">Download Free Guide</a>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <button className="faq-question">Do I need gym access?</button>
            <div className="faq-answer">Nope! Coach JG can design home workouts with minimal or no equipment.</div>
          </div>
          <div className="faq-item">
            <button className="faq-question">What if I have an injury?</button>
            <div className="faq-answer">Your plan will be customized to your physical needs, limitations, and recovery process.</div>
          </div>
          <div className="faq-item">
            <button className="faq-question">Can I cancel anytime?</button>
            <div className="faq-answer">Yes, packages are billed monthly and you can cancel before your next billing cycle.</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;




