import React, { createContext, useState, useContext } from 'react';

const ATSContext = createContext();

export const ATSProvider = ({ children }) => {
  const defaultSchedule = [
    { id: 1, name: "Morning Meditation / Goals", time: "10:00 AM", staff: "AR" },
    { id: 2, name: "Self-Care", time: "1:30 PM", staff: "LD" },
    { id: 3, name: "Neuroscience of Addiction", time: "3:30 PM", staff: "SA" },
    { id: 4, name: "Wrap-Up Group", time: "7:00 PM", staff: "KW" }
  ];

  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem('atsSchedule');
    return saved ? JSON.parse(saved) : defaultSchedule;
  });

  const updateScheduleItem = (id, updates) => {
    setSchedule(current =>
      current.map(item => {
        const updatedItem = item.id === id ? { ...item, ...updates } : item;
        localStorage.setItem('atsSchedule', JSON.stringify(current.map(i => 
          i.id === id ? { ...i, ...updates } : i
        )));
        return updatedItem;
      })
    );
  };

  return (
    <ATSContext.Provider value={{ schedule, updateScheduleItem }}>
      {children}
    </ATSContext.Provider>
  );
};

export const useATS = () => useContext(ATSContext); 