import React from 'react';
import './FacilitiesScreen.css';

const FacilitiesScreen = () => {
  return (
    <div className="facilities">
      <h1>Our Facilities</h1>
      <div className="facilities-grid">
        <div className="facility-card">
          <i className="fas fa-ambulance"></i>
          <h2>Emergency Care</h2>
          <p>24/7 emergency medical services with state-of-the-art equipment</p>
        </div>
        <div className="facility-card">
          <i className="fas fa-stethoscope"></i>
          <h2>Diagnostic Center</h2>
          <p>Advanced diagnostic equipment for accurate medical testing</p>
        </div>
        <div className="facility-card">
          <i className="fas fa-procedures"></i>
          <h2>Surgery Center</h2>
          <p>Modern surgical facilities with experienced surgical teams</p>
        </div>
        <div className="facility-card">
          <i className="fas fa-heartbeat"></i>
          <h2>Cardiac Care</h2>
          <p>Specialized cardiac care and monitoring facilities</p>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesScreen; 