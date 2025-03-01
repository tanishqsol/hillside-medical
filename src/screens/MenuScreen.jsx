import React, { useState } from 'react';
import './MenuScreen.css';
import menuData from '../data/menuData.json';

const MenuScreen = () => {
  const [showAllDays, setShowAllDays] = useState(false);
  const weeklyMenu = menuData;
  const isToday = (day) => day.includes("(3/01)"); //change here the date to show the current week
  const displayedDays = showAllDays ? weeklyMenu.days : weeklyMenu.days.filter(day => isToday(day.day));

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
        onClick={() => setShowAllDays(!showAllDays)}
      >
        {showAllDays ? 'Show Today Only' : 'Show All Days'}
      </button>
    </div>
  );
};

export default MenuScreen;