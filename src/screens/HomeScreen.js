import React from 'react';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Hillside Medical Facility</h1>
          <p>Your Health, Our Priority</p>
          <button className="cta-button">Book an Appointment</button>
        </div>
      </div>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-user-md"></i>
            <h3>Expert Doctors</h3>
            <p>Experienced healthcare professionals dedicated to your well-being</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-hospital"></i>
            <h3>Modern Facilities</h3>
            <p>State-of-the-art medical equipment and comfortable environments</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 Emergency</h3>
            <p>Round-the-clock emergency care when you need it most</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-heartbeat"></i>
            <h3>Specialized Care</h3>
            <p>Comprehensive treatment across multiple medical specialties</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen; 