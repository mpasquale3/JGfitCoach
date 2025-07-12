// src/pages/Booking.jsx

import React, { useState } from 'react';
import '../styles/Booking.css'; 

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="booking-page">
      <section className="booking">
        <div className="booking-container">
          <h1>Book Your Session</h1>

          {!submitted ? (
            <form className="booking-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" required />

              <label htmlFor="time">Time</label>
              <select id="time" name="time" required>
                <option value="">-- Please choose a time --</option>
                <option value="6am">6:00 AM</option>
                <option value="7am">7:00 AM</option>
                <option value="8am">8:00 AM</option>
                <option value="9am">9:00 AM</option>
                <option value="5pm">5:00 PM</option>
                <option value="6pm">6:00 PM</option>
                <option value="7pm">7:00 PM</option>
              </select>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Share your fitness goals..."
              ></textarea>

              <button type="submit">Request Session</button>
            </form>
          ) : (
            <div className="booking-thankyou">
              <h3>Thank you!</h3>
              <p>Your session request has been received. Coach JG will reach out to you soon.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Booking;

