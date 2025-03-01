import React, { useState } from 'react';
import './ScheduleScreen.css';

const ScheduleScreen = () => {
  const [showDailyRoutine, setShowDailyRoutine] = useState(false);
  const [showTodaySchedule, setShowTodaySchedule] = useState(false);

  const dailyRoutine = [
    { time: "7:00 AM", activity: "ADLs (Activities of Daily Living)" },
    { time: "8:30 AM", activity: "Breakfast" },
    { time: "", activity: "Fresh Air Break" },
    { time: "10:00 AM", activity: "Morning Group" },
    { time: "11:00 AM", activity: "Recreation Time" },
    { time: "", activity: "Fresh Air Break" },
    { time: "12:30 PM", activity: "Lunch" },
    { time: "1:30 PM", activity: "Group Time" },
    { time: "", activity: "Fresh Air Break" },
    { time: "3:30 PM", activity: "Group Time" },
    { time: "", activity: "Fresh Air Break" },
    { time: "6:00 PM", activity: "Dinner" },
    { time: "", activity: "Fresh Air Break & Self-Care" },
    { time: "7:00 PM", activity: "Group Time" },
    { time: "", activity: "Fresh Air Break" },
    { time: "8:30 PM", activity: "Recreation Time / Movies" },
    { time: "", activity: "Fresh Air Break" },
    { time: "11:00 PM", activity: "Lights Out" }
  ];

  const medicationTimes = [
    { time: "8:00 AM" },
    { time: "12:00 PM" },
    { time: "4:00 PM" },
    { time: "8:00 PM" }
  ];

  const todaySchedule = [
    { time: "10:00 AM", activity: "Morning Meditation / Goals", staff: "CL" },
    { time: "1:30 PM", activity: "Pottery Painting", staff: "DS" },
    { time: "3:30 PM", activity: "Spirituality", staff: "CK" },
    { time: "7:00 PM", activity: "Wrap-Up Group", staff: "DC" }
  ];

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
              {todaySchedule.map((item, index) => (
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