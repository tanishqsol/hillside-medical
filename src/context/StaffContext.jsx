import React, { createContext, useState, useContext } from 'react';

const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
  const [staffList, setStaffList] = useState({
    clinical: ['Stephen', 'Dev', 'James','Kyle','Liz','Seth','Curtis','Sean','Winsome','Rachael'],
    nursing: ['Meg', 'Eleni', 'Cianna'],
    rs: ['Arthur', 'Mackenzie', 'Chris','Justin','Kendra','Keith','Larry']
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