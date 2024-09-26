// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Home from "./components/Welcome";

const About = () => <h2>Our About Us Page</h2>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
