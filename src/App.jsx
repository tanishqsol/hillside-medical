import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.svg';
import TeamScreen from './screens/TeamScreen';
import AddictionsScreen from './screens/AddictionsScreen';
import MenuScreen from './screens/MenuScreen';
import ScheduleScreen from './screens/ScheduleScreen.jsx';
import ATSInfo from './components/ATSInfo';

// Separate MainContent component to use useLocation hook
const MainContent = ({ navigationItems }) => {
  const location = useLocation();
  const [showGuidelines, setShowGuidelines] = useState(false);
  
  const guidelines = {
    notAllowed: [
      "Weapons of any kind",
      "Drug or Alcohol Paraphernalia (Will be disposed of)",
      "No CBD or THC products (Will be disposed of)",
      "Clothing that is provocative, has offensive language, or advertises drugs and alcohol",
      "Anything containing alcohol, such as mouthwash and hand sanitizer",
      "Aerosols, including hair spray and room fresheners",
      "Perfumes/Cologne",
      "Sharps, including knives, straight blades, and multi-tools",
      "Glass containers",
      "Matches and lighters",
      "Sex toys",
      "Nail polish/Nail polish remover",
      "Candles/Incense",
      "Needles (If medically necessary, they will stay at the nurse's station)"
    ],
    allowed: {
      hygiene: [
        "Shampoo/Conditioner/Body Wash (No alcohol in first 5 ingredients)",
        "Makeup",
        "Floss",
        "Tweezers",
        "Q-tips"
      ],
      personal: [
        "Jewelry",
        "Glasses",
        "Contacts and solution",
        "Watches"
      ],
      entertainment: [
        "Art supplies and books",
        "Electronics (Phones and Laptops)",
        "Gaming devices (Check with clinical for guidelines)"
      ],
      other: [
        "Vapes (Limit: 2)",
        "Cigarettes",
        "Belts/Shoe laces"
      ],
      restricted: [
        "Electric Hair Clippers",
        "Hair Dryers, Curling Irons, Hair Straighteners",
        "Nail Clippers"
      ]
    }
  };

  if (location.pathname === '/') {
    return (
      <>
        <div className="nav-grid">
          {navigationItems.map(item => (
            <Link key={item.path} to={item.path} className="nav-tile">
              <i className={`fas ${item.icon}`}></i>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        
        <ATSInfo />
        
        <div className="guidelines-dropdown">
          <button 
            className="guidelines-toggle"
            onClick={() => setShowGuidelines(!showGuidelines)}
          >
            <i className={`fas fa-chevron-${showGuidelines ? 'up' : 'down'}`}></i>
            Facility Guidelines
          </button>
          
          <div className={`guidelines-card ${showGuidelines ? 'show' : ''}`}>
            <div className="guidelines-content">
              <div className="not-allowed">
                <h3>🚫 Items NOT Allowed (Can Not Have)</h3>
                <ul>
                  {guidelines.notAllowed.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="allowed">
                <h3>✅ Items Allowed (Can Have)</h3>
                <div className="allowed-section">
                  <h4>Personal Hygiene Items</h4>
                  <ul>
                    {guidelines.allowed.hygiene.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="allowed-section">
                  <h4>Personal Belongings</h4>
                  <ul>
                    {guidelines.allowed.personal.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="allowed-section">
                  <h4>Entertainment & Leisure</h4>
                  <ul>
                    {guidelines.allowed.entertainment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="allowed-section">
                  <h4>Other Items</h4>
                  <ul>
                    {guidelines.allowed.other.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="allowed-section">
                  <h4>Restricted Items (Kept Behind Nurse's Station)</h4>
                  <ul>
                    {guidelines.allowed.restricted.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

// Create a separate component for the navbar content
const NavbarContent = ({ isDarkMode, setIsDarkMode, isNavOpen, setIsNavOpen, navigationItems }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Link to="/" className="logo-container" title="Home">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="mobile-heading">HILLSIDE</div>
      {!isHomePage && (
        <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsNavOpen(false)} title="Home">
            <i className="fas fa-home"></i>
            <span className="nav-text">Home</span>
          </Link>
          {navigationItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsNavOpen(false)}
              title={item.name}
            >
              <i className={`fas ${item.icon}`}></i>
              <span className="nav-text">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
      <div className="nav-right">
        <button 
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle theme"
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
        {!isHomePage && (
          <button 
            className="hamburger"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </>
  );
};

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const navigationItems = [
    { path: '/team', name: 'Our Team', icon: 'fa-user-md' },
    { path: '/addictions', name: 'Types of Addiction', icon: 'fa-pills' },
    { path: '/menu', name: 'Menu', icon: 'fa-utensils' },
    { path: '/schedule', name: 'Schedule', icon: 'fa-calendar' },
  ];

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <NavbarContent 
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            navigationItems={navigationItems}
          />
        </nav>
        <SidebarOverlay isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainContent navigationItems={navigationItems} />} />
            <Route path="/team" element={<TeamScreen />} />
            <Route path="/addictions" element={<AddictionsScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/schedule" element={<ScheduleScreen />} />
            {/* Add other routes as they're created */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Separate component for the sidebar overlay
const SidebarOverlay = ({ isNavOpen, setIsNavOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage || !isNavOpen) return null;

  return (
    <div 
      className={`sidebar-overlay ${isNavOpen ? 'active' : ''}`}
      onClick={() => setIsNavOpen(false)}
    />
  );
};

export default App; 