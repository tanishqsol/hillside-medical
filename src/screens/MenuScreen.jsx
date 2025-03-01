import React, { useState } from 'react';
import './MenuScreen.css';
import menuData from '../data/menuData.json';

const MenuScreen = () => {
  const [showFullWeek, setShowFullWeek] = useState(false);
  
  const weeklyMenu = menuData;

  const displayedDays = showFullWeek ? weeklyMenu.days : weeklyMenu.days.slice(0, 3);
  const isToday = (day) => day.includes("(3/01)"); // Example logic

  return (
    <div className="menu-screen">
      <h1>{weeklyMenu.title}</h1>
      <div className="menu-cards">
        {displayedDays.map((day, index) => (
          <div key={index} className={`menu-card ${isToday(day.day) ? 'today' : ''}`}>
            <div className="menu-card-header">
              <h2>{day.day}</h2>
              {isToday(day.day) && <span className="today-badge">Today</span>}
            </div>
            <div className="meal-section">
              <h3><i className="fas fa-sun"></i> Breakfast</h3>
              <p>{day.meals.breakfast}</p>
            </div>
            <div className="meal-section">
              <h3><i className="fas fa-cloud-sun"></i> Lunch</h3>
              <p>{day.meals.lunch}</p>
            </div>
            <div className="meal-section">
              <h3><i className="fas fa-moon"></i> Dinner</h3>
              <p>{day.meals.dinner}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="toggle-view-btn"
        onClick={() => setShowFullWeek(!showFullWeek)}
      >
        {showFullWeek ? 'Show Less' : 'View Full Week'}
      </button>
    </div>
  );
};

export default MenuScreen; 