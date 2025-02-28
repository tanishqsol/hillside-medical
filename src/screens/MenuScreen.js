import React from 'react';
import './MenuScreen.css';

const MenuScreen = () => {
  return (
    <div className="menu">
      <h1>Cafeteria Menu</h1>
      <div className="menu-container">
        <div className="menu-section">
          <h2>Breakfast (7:00 AM - 10:00 AM)</h2>
          <div className="menu-items">
            <div className="menu-item">
              <h3>Continental Breakfast</h3>
              <p>Fresh pastries, fruits, cereals, and yogurt</p>
            </div>
            <div className="menu-item">
              <h3>Hot Breakfast</h3>
              <p>Eggs, pancakes, oatmeal, and breakfast meats</p>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2>Lunch (11:30 AM - 2:30 PM)</h2>
          <div className="menu-items">
            <div className="menu-item">
              <h3>Daily Specials</h3>
              <p>Rotating selection of hot entrees</p>
            </div>
            <div className="menu-item">
              <h3>Salad Bar</h3>
              <p>Fresh vegetables and healthy toppings</p>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2>Dinner (5:30 PM - 8:00 PM)</h2>
          <div className="menu-items">
            <div className="menu-item">
              <h3>Evening Entrees</h3>
              <p>Selection of protein options with sides</p>
            </div>
            <div className="menu-item">
              <h3>Vegetarian Options</h3>
              <p>Plant-based and vegetarian meals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen; 