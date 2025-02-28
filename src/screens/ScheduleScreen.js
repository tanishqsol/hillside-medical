import React from 'react';
import './ScheduleScreen.css';

const ScheduleScreen = () => {
  return (
    <div className="schedule">
      <h1>Hospital Schedule</h1>
      <div className="schedule-container">
        <div className="schedule-section">
          <h2>Regular Hours</h2>
          <div className="schedule-item">
            <h3>Emergency Care</h3>
            <p>24 hours / 7 days a week</p>
          </div>
          <div className="schedule-item">
            <h3>Outpatient Services</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 8:00 AM - 2:00 PM</p>
          </div>
          <div className="schedule-item">
            <h3>Visiting Hours</h3>
            <p>Daily: 10:00 AM - 8:00 PM</p>
          </div>
        </div>

        <div className="schedule-section">
          <h2>Specialty Clinics</h2>
          <div className="schedule-item">
            <h3>Cardiology</h3>
            <p>Monday, Wednesday, Friday: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="schedule-item">
            <h3>Pediatrics</h3>
            <p>Tuesday, Thursday: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="schedule-item">
            <h3>Orthopedics</h3>
            <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleScreen; 