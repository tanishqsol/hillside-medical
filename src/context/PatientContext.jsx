import React, { createContext, useState, useContext } from 'react';
import patientData from '../data/patientData.json';

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem('patients');
    return saved ? JSON.parse(saved) : patientData.patients;
  });

  const updatePatient = (newPatient) => {
    setPatients(current => {
      const updated = [...current];
      const index = updated.findIndex(p => p.room === newPatient.room);
      if (index >= 0) {
        updated[index] = newPatient;
      } else {
        updated.push(newPatient);
      }
      localStorage.setItem('patients', JSON.stringify(updated));
      return updated;
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