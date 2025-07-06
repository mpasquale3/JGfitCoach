import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      {/* Mission Panel */}
      <div className="about-panel mission">
        <div className="panel-content">
          <h3>Mission</h3>
          <p>
            At JG Fit Coach, my mission is to empower individuals to achieve optimal health and wellness
            and build the best version of themselves. I strive to provide a positive environment of education
            and support where each client feels empowered and motivated to reach their goals.
          </p>
        </div>
      </div>

      {/* Expertise Panel */}
      <div className="about-panel expertise">
        <div className="panel-content">
          <h3>Expertise</h3>
          <p>
            B.A. Exercise Science & Sociology, Oakland University 2014 <br />
            NASM Certified Personal Trainer <br />
            NASM Certified Nutritionist <br />
            NASM Certified Physique & Bodybuilding Coach
          </p>
          <p>
            I’m committed to staying current with the latest research in the fitness industry
            while providing the best possible guidance and support for each client.
          </p>
        </div>
      </div>

      {/* Services Panel */}
      <div className="about-panel services">
        <div className="panel-content">
          <h3>Services</h3>
          <p>
            As an Online Fitness Professional, I offer a variety of services, including individualized Diet & Exercise
            Programming, Weekly and Bi-Weekly Check-ins, 24-hour support for members, exercise critique, bloodwork
            analysis, posing instruction and much more.
          </p>
          <p>
            I will meet you where you are on your fitness journey and help you in building sustainable habits that create
            a lasting, lifelong impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
