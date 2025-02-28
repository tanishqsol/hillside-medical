import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.svg';
import TeamScreen from './screens/TeamScreen';

// Separate MainContent component to use useLocation hook
const MainContent = ({ navigationItems }) => {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return (
      <div className="nav-grid">
        {navigationItems.map(item => (
          <Link key={item.path} to={item.path} className="nav-tile">
            <i className={`fas ${item.icon}`}></i>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    );
  }
  return null;
};

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const navigationItems = [
    { path: '/', name: 'Home', icon: 'fa-home' },
    { path: '/team', name: 'Our Team', icon: 'fa-user-md' },
    { path: '/menu', name: 'Menu', icon: 'fa-utensils' },
    { path: '/schedule', name: 'Schedule', icon: 'fa-calendar' },
  ];

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="logo-container">
            <img src={logo} alt="Hillside Medical Logo" className="logo" />
          </Link>
          <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            {navigationItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setIsNavOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="nav-right">
            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button 
              className="hamburger"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainContent navigationItems={navigationItems} />} />
            <Route path="/team" element={<TeamScreen />} />
            {/* Add other routes as they're created */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 