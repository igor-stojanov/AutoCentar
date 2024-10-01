// src/components/Services.jsx
import React from "react";
import "../css/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <img src="/servicesrepair.jpg" alt="Repair Service" />
          <h3>Car Repair</h3>
          <p>
            We provide comprehensive car repair services to ensure your vehicle
            is in top condition.
          </p>
        </div>
        <div className="service-item">
          <img src="/servicesdiagnostics.jpg" alt="Diagnostics Service" />
          <h3>Engine Diagnostics</h3>
          <p>
            Our advanced diagnostic tools help identify issues and optimize
            vehicle performance.
          </p>
        </div>
        <div className="service-item">
          <img src="/servicestyres.jpg" alt="Tyre Service" />
          <h3>Tire Replacement</h3>
          <p>
            We offer high-quality tire replacement and balancing services for
            all vehicle types.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
