import React, { createContext, useState, useContext } from 'react';
import staffData from '../data/staffData.json';

const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
  const [staffList, setStaffList] = useState(staffData);

  const [staffPhotos, setStaffPhotos] = useState(() => {
    const saved = localStorage.getItem('staffPhotos');
    return saved ? JSON.parse(saved) : {};
  });

  const updateStaffPhoto = (name, photoUrl) => {
    setStaffPhotos(prev => {
      const updated = { ...prev, [name]: photoUrl };
      localStorage.setItem('staffPhotos', JSON.stringify(updated));
      return updated;
    });
  };

  const addStaffMember = (role, name) => {
    setStaffList(prev => ({
      ...prev,
      [role]: [...prev[role], name]
    }));
  };

  const removeStaffMember = (role, index) => {
    setStaffList(prev => ({
      ...prev,
      [role]: prev[role].filter((_, i) => i !== index)
    }));
  };

  return (
    <StaffContext.Provider value={{ 
      staffList, 
      addStaffMember, 
      removeStaffMember,
      staffPhotos,
      updateStaffPhoto 
    }}>
      {children}
    </StaffContext.Provider>
  );
};

export const useStaff = () => useContext(StaffContext); 