import React, { useState } from 'react';
import './TeamScreen.css';
import { useStaff } from '../context/StaffContext';
import { usePatients } from '../context/PatientContext';
import StaffPhotoModal from '../components/StaffPhotoModal';
import staffData from '../data/staffData.json';

const TeamScreen = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const { staffPhotos, updateStaffPhoto } = useStaff();
  const { patients } = usePatients();

  const hillsideTeam = staffData;

  const handlePhotoUpload = (staffMember, photoUrl) => {
    updateStaffPhoto(staffMember, photoUrl);
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
              {hillsideTeam.clinicalStaff.map((staff, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(staff.name)}
                >
                  <div className="staff-avatar">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <span className="staff-name">{staff.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="staff-section">
            <h3>Nursing Staff</h3>
            <div className="staff-list">
              {hillsideTeam.nursingStaff.map((staff, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(staff.name)}
                >
                  <div className="staff-avatar">
                    <i className="fas fa-user-nurse"></i>
                  </div>
                  <span className="staff-name">{staff.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="staff-section">
            <h3>RS Staff on Duty</h3>
            <div className="staff-list">
              {hillsideTeam.rsStaff.map((staff, index) => (
                <div 
                  key={index} 
                  className="staff-member"
                  onClick={() => setSelectedMember(staff.name)}
                >
                  <div className="staff-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <span className="staff-name">{staff.name}</span>
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
              {staffPhotos[selectedMember] ? (
                <img src={staffPhotos[selectedMember]} alt={selectedMember} />
              ) : (
                <i className={`fas fa-${selectedMember.gender}`}></i>
              )}
            </div>
            <h2>{selectedMember}</h2>
            <button 
              className="upload-photo-btn"
              onClick={() => setPhotoModalOpen(true)}
            >
              <i className="fas fa-camera"></i> Upload Photo
            </button>
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

      <StaffPhotoModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        staffMember={selectedMember}
        onUpload={handlePhotoUpload}
      />
    </div>
  );
};

export default TeamScreen; 