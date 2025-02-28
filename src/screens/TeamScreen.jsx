import React, { useState } from 'react';
import './TeamScreen.css';

const TeamScreen = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const hillsideTeam = {
    clinicalStaff: [
      { name: "Stephen", gender: "male" },
      { name: "Curtis", gender: "male" },
      { name: "Sean", gender: "male" },
      { name: "Lily", gender: "female" },
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

  const patients = [
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

  return (
    <div className="team-screen">
      <div className="team-grid">
        {/* Hillside Team Card */}
        <div className="team-card">
          <h2>Hillside Team</h2>
          <div className="staff-section">
            <h3>Clinical Staff</h3>
            <div className="staff-list">
              {hillsideTeam.clinicalStaff.map((member, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="staff-avatar">
                    <i className={`fas fa-${member.gender}`}></i>
                  </div>
                  <span className="staff-name">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="staff-section">
            <h3>Nursing Staff</h3>
            <div className="staff-list">
              {hillsideTeam.nursingStaff.map((member, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="staff-avatar">
                    <i className={`fas fa-${member.gender}`}></i>
                  </div>
                  <span className="staff-name">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="staff-section">
            <h3>RS Staff on Duty</h3>
            <div className="staff-list">
              {hillsideTeam.rsStaff.map((member, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="staff-avatar">
                    <i className={`fas fa-${member.gender}`}></i>
                  </div>
                  <span className="staff-name">
                    {member.position}: {member.name}
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
            <h2>{selectedMember.name}</h2>
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