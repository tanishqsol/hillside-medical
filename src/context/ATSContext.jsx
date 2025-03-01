import React, { createContext, useState, useContext } from 'react';
import scheduleData from '../data/scheduleData.json';

const ATSContext = createContext();

export const ATSProvider = ({ children }) => {
  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem('atsSchedule');
    return saved ? JSON.parse(saved) : scheduleData.defaultSchedule;
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
    <ATSContext.Provider value={{ 
      schedule, 
      updateScheduleItem,
      defaultSchedule: scheduleData.defaultSchedule 
    }}>
      {children}
    </ATSContext.Provider>
  );
};

export const useATS = () => useContext(ATSContext); 