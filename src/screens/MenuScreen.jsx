import React, { useState } from 'react';
import './MenuScreen.css';

const MenuScreen = () => {
  const [showFullWeek, setShowFullWeek] = useState(false);
  
  const weeklyMenu = {
    title: "Weekly Menu (2/23/25 - 3/01/25)",
    days: [
      {
        day: "Sunday (2/23)",
        meals: {
          breakfast: "Cinnamon French Toast, Home Fries, Scrambled Eggs, Sausage Patty",
          lunch: "Turkey Vegetables, Pastrami & Cheese Sub, Sweet Potato Fries, Pasta Salad, Apple Pie",
          dinner: "Turkey Vegetables, Pan-Seared Chicken Breast with Paprika Butter, Seasoned Potato Wedge, Steamed Broccoli, Lemon Bars"
        }
      },
      {
        day: "Monday (2/24)",
        meals: {
          breakfast: "Buttery Pancakes with Creamy Butter, Tater Tots, Scrambled Eggs, Crispy Bacon",
          lunch: "Beef Burrito Bowl (Seasoned Rice, Lettuce, Tomato, Onions, Peppers, Salsa, Sour Cream, Guacamole, Soft Flour Tortilla), Flourless Chocolate Torte",
          dinner: "Beef Rice, Garlic Parmesan Crusted Chicken Breast, Garlic Mashed Potato, Sliced Carrots, Red Velvet Cake"
        }
      },
      {
        day: "Tuesday (2/25)",
        meals: {
          breakfast: "Breakfast Cheese Pizza, Honey Ham, Scrambled Eggs, Corned Beef Hash, Hash Brown",
          lunch: "Chicken Orzo, Fried Shrimp Plate (Bed of Rice, Cole Slaw, French Fries, Lemon Wedge, Tartar Sauce), Chocolate Cake",
          dinner: "Chicken Orzo, Chop Sirloin with Mushroom Gravy, Mashed Potatoes, Peas and Corn, Boston Cream Pie"
        }
      },
      {
        day: "Wednesday (2/26)",
        meals: {
          breakfast: "Bacon & Cheese Quiche, Scrambled Eggs, Home Fries, Canadian Bacon",
          lunch: "Vegetable Barley, Pizza Party! (Cheese, Pepperoni, Sausage, Veggie), Salad Bar, Carrot Cake",
          dinner: "Vegetable Barley, Chicken Parmesan, Mozzarella Marinara, Herb Roasted Potato, Fresh Cauliflower, Pumpkin Pie"
        }
      },
      {
        day: "Thursday (2/27)",
        meals: {
          breakfast: "Belgian Waffle, Scrambled Eggs, Tater Tots, Sausage Links",
          lunch: "Chicken Lentil, Flat Grilled Chicken, Caesar Salad (Romaine Lettuce, Croutons, Shredded Parmesan Cheese, Creamy Caesar Dressing), Cheese Cake",
          dinner: "Chicken Lentil, Beef Burgundy with Beef Gravy, Baby Carrots, White Rice, Dinner Roll, Pecan Pie"
        }
      },
      {
        day: "Friday (2/28)",
        meals: {
          breakfast: "Chocolate Pancakes, Home Fries, Scrambled Eggs, Crispy Bacon",
          lunch: "N.E. Clam Chowder, Sliced London Broil, Demi-Glace Rice Pilaf, Fresh Asparagus, Blueberry Pie",
          dinner: "N.E. Clam Chowder, Chicken Saltimbocca with Sage Butter Sauce, Mashed Potatoes, Roasted Garlic Eggplant, Housemade Brownies"
        }
      },
      {
        day: "Saturday (3/01)",
        meals: {
          breakfast: "Ham Breakfast Sandwich, Hash Browns, Scrambled Eggs, Corned Beef Hash",
          lunch: "Tomato Bisque, Potato Gnocchi, Housemade Meatballs, Tomato Marinara, Parmesan Cheese, Lemon Broccolini, Key Lime Pie",
          dinner: "Tomato Bisque, Mexican Carnitas Plate (Shredded Mexican Pork, Spanish Rice, Chili Lime Black Beans, Salsa), Vanilla Budding"
        }
      }
    ]
  };

  const displayedDays = showFullWeek ? weeklyMenu.days : weeklyMenu.days.slice(0, 3);
  const isToday = (day) => day.includes("(2/23)"); // Example logic

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