import React, { createContext, useState, useContext } from 'react';

const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
  const [staffList, setStaffList] = useState({
    clinical: ['Dr. Sarah Adams', 'Dr. Michael Chen', 'Dr. Emily Rodriguez'],
    nursing: ['RN Jessica Thompson', 'RN David Wilson', 'RN Maria Garcia'],
    rs: ['John Smith', 'Laura Brown', 'Kevin White']
  });

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
    <StaffContext.Provider value={{ staffList, addStaffMember, removeStaffMember }}>
      {children}
    </StaffContext.Provider>
  );
};

export const useStaff = () => useContext(StaffContext); 