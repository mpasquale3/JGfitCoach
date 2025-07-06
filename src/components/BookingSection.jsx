import React, { useState } from 'react';
import '../styles/BookingSection.css';

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="booking">
      <div className="booking-container">
        <h2>Request a Session</h2>

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
            <p>Your session request has been received. Coach Joel will reach out to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
