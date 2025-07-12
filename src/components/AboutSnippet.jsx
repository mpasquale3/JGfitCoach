// src/components/AboutSnippet.jsx

import React from 'react';
import '../styles/AboutSnippet.css';

const AboutSnippet = () => {
  return (
    <section className="about-snippet">
      <h2>About Coach JG</h2>
      <p>
        Empowering individuals to achieve optimal health and wellness.
        With a background in Exercise Science and multiple NASM certifications,
        Coach JG provides customized plans, accountability, and real results.
      </p>
      <a href="/about" className="about-link">Learn More</a>
    </section>
  );
};

export default AboutSnippet;
