import React, { useState } from "react"; // Make sure to import useState
import "../css/Contact.css";

import {
  validateEmail,
  validateName,
  validateMessage,
} from "../utils/validation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      setFormStatus(
        "Invalid name. Name must be 3-30 characters and contain only letters."
      );
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus("Invalid email address.");
      return;
    }

    if (!validateMessage(formData.message)) {
      setFormStatus("Message must be at least 10 characters long.");
      return;
    }

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Simulate form submission
    console.log("Form data submitted:", formData);

    // Simulate successful submission
    setFormStatus("Message submitted successfully!");

    // Optionally clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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

        {/* Display form status */}
        {formStatus && <p>{formStatus}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange} // Link to handleInputChange
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange} // Link to handleInputChange
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange} // Link to handleInputChange
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button> {/* Links to handleSubmit */}
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
