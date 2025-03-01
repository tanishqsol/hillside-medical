import React, { useState } from 'react';
import './ScheduleScreen.css';
import scheduleData from '../data/scheduleData.json';
import { useATS } from '../context/ATSContext';

const ScheduleScreen = () => {
  const [showDailyRoutine, setShowDailyRoutine] = useState(false);
  const [showTodaySchedule, setShowTodaySchedule] = useState(false);
  const { schedule, defaultSchedule } = useATS();

  const dailyRoutine = scheduleData.dailyRoutine;

  const medicationTimes = scheduleData.medicationTimes;

  // Use schedule from context if available, otherwise use default schedule
  const displaySchedule = schedule.length > 0 ? schedule : defaultSchedule;

  return (
    <div className="schedule-screen">
      <div className="schedule-grid">
        {/* Daily Routine Dropdown */}
        <div className="schedule-card">
          <button 
            className="schedule-toggle"
            onClick={() => setShowDailyRoutine(!showDailyRoutine)}
          >
            <span>ATS Program Schedule (Daily Routine)</span>
            <i className={`fas fa-chevron-${showDailyRoutine ? 'up' : 'down'}`}></i>
          </button>
          
          <div className={`schedule-content ${showDailyRoutine ? 'show' : ''}`}>
            <div className="schedule-list">
              {dailyRoutine.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="time">{item.time}</span>
                  <span className={`activity ${!item.time ? 'break' : ''}`}>
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medication Times Card */}
        <div className="schedule-card med-times">
          <h2>ATS Medication Times</h2>
          <div className="med-list">
            {medicationTimes.map((item, index) => (
              <div key={index} className="med-time">
                <i className="fas fa-pills"></i>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
          <p className="med-note">(Medication times can be flexible +/- 1 hour)</p>
        </div>

        {/* Today's Schedule Dropdown */}
        <div className="schedule-card">
          <button 
            className="schedule-toggle"
            onClick={() => setShowTodaySchedule(!showTodaySchedule)}
          >
            <span>ATS Daily Schedule – Friday, February 28</span>
            <i className={`fas fa-chevron-${showTodaySchedule ? 'up' : 'down'}`}></i>
          </button>
          
          <div className={`schedule-content ${showTodaySchedule ? 'show' : ''}`}>
            <div className="today-list">
              {displaySchedule.map((item, index) => (
                <div key={index} className="today-item">
                  <span className="time">{item.time}</span>
                  <span className="activity">{item.activity}</span>
                  <span className="staff">({item.staff})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleScreen; 