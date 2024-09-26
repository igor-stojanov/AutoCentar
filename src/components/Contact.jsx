// src/components/Contact.jsx
import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Contact Information */}
      <div className="contact-info">
        <p>
          <strong>Email:</strong> autocentarpolis@gmail.com
        </p>
        <p>
          <strong>Telefon:</strong> 063/354-372
        </p>
        <p>
          <strong>Adresa:</strong> Hajduk Veljka 27v, Plandište
        </p>
        <p>
          <strong>Radno vreme:</strong> 07:00 - 15:00 (radnim danima)
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Optional Map */}
      <div className="map">
        <h2>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.4858396766425!2d21.119824900292354!3d45.22871344589887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47500ea96b6fedad%3A0x71f6aa27f7944250!2sHajduk%20Veljka%2027%2C%20Plandi%C5%A1te!5e0!3m2!1sen!2srs!4v1727387408306!5m2!1sen!2srs"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
