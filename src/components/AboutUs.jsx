// src/components/About.jsx
import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-company">
        <h1>About AutoCentar</h1>
        <p>
          Welcome to AutoCentar, your trusted partner in automotive services. We
          are committed to providing top-notch vehicle maintenance, repairs, and
          diagnostics. With years of experience in the industry, we have built a
          reputation for delivering excellent customer service and expert
          solutions to ensure your vehicle runs smoothly and safely.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality auto services to our clients,
          ensuring safety and reliability on the road. We strive to exceed
          customer expectations by offering honest, professional, and timely
          automotive services that you can rely on.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/teammember1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Chief Mechanic</p>
          </div>
          <div className="team-member">
            <img src="/teammember2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Customer Service Manager</p>
          </div>
          <div className="team-member">
            <img src="/teammember3.jpg" alt="Team Member 3" />
            <h3>Mark Johnson</h3>
            <p>Diagnostic Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
