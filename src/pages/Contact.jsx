
// src/pages/Contact.jsx

import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact">
        <div className="contact-container">
          <h1>Contact Me</h1>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;


