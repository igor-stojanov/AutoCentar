import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; // Custom CSS for the home page

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Auto Centar Polis</h1>
          <p>Your trusted auto service center</p>
          <Link to="/services" className="btn-primary">
            View Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Car Repair</h3>
            <p>
              We offer professional car repair services with top-notch equipment
              and skilled mechanics.
            </p>
          </div>
          <div className="service-item">
            <h3>Tire Replacement</h3>
            <p>
              Get your tires replaced with high-quality options that keep your
              vehicle safe on the road.
            </p>
          </div>
          <div className="service-item">
            <h3>Engine Diagnostics</h3>
            <p>
              We provide advanced engine diagnostics to ensure your car runs
              smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Need Assistance?</h2>
        <p>
          Contact us today to book an appointment or learn more about our
          services.
        </p>
        <Link to="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
