import React, { useState } from 'react';
import './TeamScreen.css';
import { useStaff } from '../context/StaffContext';
import { usePatients } from '../context/PatientContext';

const TeamScreen = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { staffList } = useStaff();
  const { patients } = usePatients();

  const hillsideTeam = {
    clinicalStaff: [
      { name: "Stephen", gender: "male" },
      { name: "Curtis", gender: "male" },
      { name: "Sean", gender: "male" },
      { name: "Lily", gender: "female" },
      { name: "ziena", gender: "female" },
      { name: "James", gender: "male" },
      { name: "Kyle", gender: "male" },
      { name: "Liz", gender: "female" },
      { name: "Seth", gender: "male" },
      { name: "Dev", gender: "male" },
      { name: "Rachael", gender: "female" },
      { name: "Winsome", gender: "female" }
    ],
    nursingStaff: [
      { name: "Meg", gender: "female" },
      { name: "Cianna", gender: "female" },
      { name: "Eleni", gender: "female" }
    ],
    rsStaff: [
      { name: "Larry", position: "RS 1", gender: "male" },
      { name: "Arthur", position: "RS 2", gender: "male" },
      { name: "Keondra", position: "RS 3", gender: "female" },
      { name: "Keith", position: "RS 4", gender: "male" }
    ]
  };

  return (
    <div className="team-screen">
      <div className="team-grid">
        {/* Hillside Team Card */}
        <div className="team-card">
          <h2>Hillside Team</h2>
          <div className="staff-section">
            <h3>Clinical Staff</h3>
            <div className="staff-list">
              {staffList.clinical.map((staff, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(staff)}
                >
                  <div className="staff-avatar">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <span className="staff-name">{staff}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="staff-section">
            <h3>Nursing Staff</h3>
            <div className="staff-list">
              {staffList.nursing.map((staff, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(staff)}
                >
                  <div className="staff-avatar">
                    <i className="fas fa-user-nurse"></i>
                  </div>
                  <span className="staff-name">{staff}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="staff-section">
            <h3>RS Staff on Duty</h3>
            <div className="staff-list">
              {staffList.rs.map((staff, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(staff)}
                >
                  <div className="staff-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <span className="staff-name">
                    {staff}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patients Card */}
        <div className="team-card patients-card">
          <h2>Patients</h2>
          <div className="table-container">
            <table className="patients-table">
              <thead>
                <tr>
                  <th>Room #</th>
                  <th>Patient Name</th>
                  <th>Clinician</th>
                  <th>Case Manager</th>
                  <th>Care Coordinator</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index} className={patient.isHighlight ? 'highlight' : ''}>
                    <td>{patient.room}</td>
                    <td>{patient.name}</td>
                    <td>{patient.clinician}</td>
                    <td>{patient.caseManager}</td>
                    <td>{patient.careCoordinator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Staff Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            <div className="modal-avatar">
              <i className={`fas fa-${selectedMember.gender}`}></i>
            </div>
            <h2>{selectedMember}</h2>
            <p className="modal-role">
              {selectedMember.position ? 
                `Role: ${selectedMember.position}` : 
                `Role: ${hillsideTeam.nursingStaff.includes(selectedMember) ? 'Nursing Staff' : 'Clinical Staff'}`
              }
            </p>
            <p className="modal-description">
              Additional information about {selectedMember.name} will be displayed here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamScreen; 