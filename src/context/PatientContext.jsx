import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const defaultPatients = [
    { room: "201a", name: "-", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "201b", name: "Michael C", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "202a", name: "Thomas M", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "202b", name: "Charles R", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "203a", name: "-", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "203b", name: "David D", clinician: "Mark K", caseManager: "Winsome", careCoordinator: "James" },
    { room: "204a", name: "Tanishq", clinician: "Curtis", caseManager: "Sam", careCoordinator: "Zeina" },
    { room: "204b", name: "Michael O", clinician: "Sean", caseManager: "Winsome", careCoordinator: "-" },
    { room: "205a", name: "Jake T", clinician: "Dev", caseManager: "Liz", careCoordinator: "-" },
    { room: "205b", name: "Michael E", clinician: "Lily", caseManager: "Sam", careCoordinator: "-" },
    { room: "206a", name: '"Madi" D', clinician: "Dev", caseManager: "Marissa", careCoordinator: "Zeina" },
    { room: "206b", name: "John P", clinician: "Rachael", caseManager: "Seth", careCoordinator: "-" },
    { room: "207a", name: "Eden F", clinician: "Rachael", caseManager: "-", careCoordinator: "-" },
    { room: "207b", name: "Jacki", clinician: "Josh", caseManager: "Stephen", careCoordinator: "James" },
    { room: "208a", name: "-", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "208b", name: "Tom P", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "209a", name: "Dean M", clinician: "Mark", caseManager: "Stephen", careCoordinator: "-" },
    { room: "209b", name: "Jeremy G", clinician: "Sean", caseManager: "Sam", careCoordinator: "-" },
    { room: "210a", name: "(Red Text, Unclear)", clinician: "-", caseManager: "-", careCoordinator: "-", isHighlight: true },
    { room: "210b", name: "Rickey", clinician: "Mark", caseManager: "Stephen", careCoordinator: "-" },
    { room: "211a", name: "Shawn M", clinician: "-", caseManager: "-", careCoordinator: "-" },
    { room: "211b", name: "Jacob J", clinician: "-", caseManager: "Liz", careCoordinator: "-" }
  ];

  const [patients, setPatients] = useState(defaultPatients);

  const updatePatient = (updatedPatient) => {
    setPatients(currentPatients => {
      const index = currentPatients.findIndex(p => p.room === updatedPatient.room);
      if (index !== -1) {
        const newPatients = [...currentPatients];
        newPatients[index] = {
          ...updatedPatient,
          room: currentPatients[index].room
        };
        return newPatients;
      }
      return currentPatients;
    });
  };

  const clearPatient = (room) => {
    setPatients(currentPatients =>
      currentPatients.map(patient =>
        patient.room === room
          ? { ...patient, name: "-", clinician: "-", caseManager: "-", careCoordinator: "-" }
          : patient
      )
    );
  };

  return (
    <PatientContext.Provider value={{ patients, updatePatient, clearPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatients = () => useContext(PatientContext); 