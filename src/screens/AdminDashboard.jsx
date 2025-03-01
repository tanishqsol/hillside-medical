import React, { useState } from 'react';
import './AdminDashboard.css';
import { useStaff } from '../context/StaffContext';
import { usePatients } from '../context/PatientContext';
import { useATS } from '../context/ATSContext';
import ImageCropper from '../components/ImageCropper';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('patients');
  const [newStaffMember, setNewStaffMember] = useState({ name: '', role: 'clinical' });
  const { staffList, addStaffMember, removeStaffMember, staffPhotos, updateStaffPhoto } = useStaff();
  const { patients, updatePatient, clearPatient } = usePatients();
  const { schedule, updateScheduleItem } = useATS();
  
  // Add patient state
  const [patientForm, setPatientForm] = useState({
    room: '',
    name: '',
    clinician: '',
    caseManager: '',
    careCoordinator: ''
  });

  const [editingSchedule, setEditingSchedule] = useState({});
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (newStaffMember.name.trim()) {
      addStaffMember(newStaffMember.role, newStaffMember.name);
      setNewStaffMember({ name: '', role: newStaffMember.role });
    }
  };

  const handleRemoveStaff = (role, index) => {
    removeStaffMember(role, index);
  };

  const handlePatientSubmit = (e) => {
    e.preventDefault();
    
    updatePatient(patientForm);

    // Reset form
    setPatientForm({
      room: '',
      name: '',
      clinician: '',
      caseManager: '',
      careCoordinator: ''
    });
  };

  const handleDeletePatient = (roomToDelete) => {
    if (window.confirm('Are you sure you want to clear this patient\'s data?')) {
      clearPatient(roomToDelete);
    }
  };

  const handleScheduleEdit = (id, field, value) => {
    setEditingSchedule(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleScheduleUpdate = (item) => {
    if (editingSchedule[item.id]) {
      updateScheduleItem(item.id, editingSchedule[item.id]);
      setEditingSchedule(prev => {
        const newState = { ...prev };
        delete newState[item.id];
        return newState;
      });
    }
  };

  const handleImageSelect = (e, staff) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setSelectedStaff(staff);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;
    canvas.width = 100 * pixelRatio;
    canvas.height = 100 * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;
    const cropWidth = crop.width * scaleX;
    const cropHeight = crop.height * scaleY;

    ctx.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      100,
      100
    );

    return canvas.toDataURL('image/jpeg');
  };

  const handleCropComplete = (croppedImageUrl) => {
    updateStaffPhoto(selectedStaff, croppedImageUrl);
    setSelectedImage(null);
    setSelectedStaff(null);
  };

  const sections = {
    patients: {
      title: 'Patient Management',
      component: (
        <div className="patient-management">
          <div className="patient-form">
            <h3>Add/Update Patient</h3>
            <form onSubmit={handlePatientSubmit}>
              <div className="form-group">
                <label>Room #</label>
                <input
                  type="text"
                  value={patientForm.room}
                  onChange={(e) => setPatientForm(prev => ({ ...prev, room: e.target.value }))}
                  placeholder="Enter room number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  value={patientForm.name}
                  onChange={(e) => setPatientForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter patient name"
                />
              </div>
              <div className="form-group">
                <label>Clinician</label>
                <select
                  value={patientForm.clinician}
                  onChange={(e) => setPatientForm(prev => ({ ...prev, clinician: e.target.value }))}
                >
                  <option value="">Select Clinician</option>
                  {staffList.clinical.map((staff, index) => (
                    <option key={index} value={staff}>{staff}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Case Manager</label>
                <select
                  value={patientForm.caseManager}
                  onChange={(e) => setPatientForm(prev => ({ ...prev, caseManager: e.target.value }))}
                >
                  <option value="">Select Case Manager</option>
                  {staffList.clinical.map((staff, index) => (
                    <option key={index} value={staff}>{staff}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Care Coordinator</label>
                <select
                  value={patientForm.careCoordinator}
                  onChange={(e) => setPatientForm(prev => ({ ...prev, careCoordinator: e.target.value }))}
                >
                  <option value="">Select Care Coordinator</option>
                  {staffList.clinical.map((staff, index) => (
                    <option key={index} value={staff}>{staff}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="submit-btn">
                {patientForm.room ? 'Update Patient' : 'Add Patient'}
              </button>
            </form>
          </div>

          <div className="current-patients">
            <h3>Current Patients</h3>
            <div className="table-container">
              <table className="patients-table">
                <thead>
                  <tr>
                    <th>Room #</th>
                    <th>Patient Name</th>
                    <th>Clinician</th>
                    <th>Case Manager</th>
                    <th>Care Coordinator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index}>
                      <td>{patient.room}</td>
                      <td>{patient.name}</td>
                      <td>{patient.clinician}</td>
                      <td>{patient.caseManager}</td>
                      <td>{patient.careCoordinator}</td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            onClick={() => setPatientForm(patient)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeletePatient(patient.room)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    clinical: {
      title: 'Staff Management',
      component: (
        <div className="staff-management">
          <div className="add-staff-form">
            <h3>Add New Staff Member</h3>
            <form onSubmit={handleAddStaff}>
              <div className="form-group">
                <label>Staff Name</label>
                <input
                  type="text"
                  value={newStaffMember.name}
                  onChange={(e) => setNewStaffMember(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter staff name"
                />
              </div>
              <div className="form-group">
                <label>Staff Role</label>
                <select
                  value={newStaffMember.role}
                  onChange={(e) => setNewStaffMember(prev => ({ ...prev, role: e.target.value }))}
                >
                  <option value="clinical">Clinical Staff</option>
                  <option value="nursing">Nursing Staff</option>
                  <option value="rs">RS Staff</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Add Staff Member</button>
            </form>
          </div>

          <div className="current-staff">
            <div className="staff-section">
              <h3>Clinical Staff</h3>
              <div className="staff-list">
                {staffList.clinical.map((staff, index) => (
                  <div key={index} className="staff-item">
                    <div className="staff-photo">
                      {staffPhotos[staff] ? (
                        <img src={staffPhotos[staff]} alt={staff} />
                      ) : (
                        <i className="fas fa-user-md"></i>
                      )}
                      <label className="photo-upload-label">
                        <i className="fas fa-camera"></i>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageSelect(e, staff)}
                          className="photo-input"
                        />
                      </label>
                    </div>
                    <span>{staff}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveStaff('clinical', index)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="staff-section">
              <h3>Nursing Staff</h3>
              <div className="staff-list">
                {staffList.nursing.map((staff, index) => (
                  <div key={index} className="staff-item">
                    <div className="staff-photo">
                      {staffPhotos[staff] ? (
                        <img src={staffPhotos[staff]} alt={staff} />
                      ) : (
                        <i className="fas fa-user-md"></i>
                      )}
                      <label className="photo-upload-label">
                        <i className="fas fa-camera"></i>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageSelect(e, staff)}
                          className="photo-input"
                        />
                      </label>
                    </div>
                    <span>{staff}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveStaff('nursing', index)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="staff-section">
              <h3>RS Staff</h3>
              <div className="staff-list">
                {staffList.rs.map((staff, index) => (
                  <div key={index} className="staff-item">
                    <div className="staff-photo">
                      {staffPhotos[staff] ? (
                        <img src={staffPhotos[staff]} alt={staff} />
                      ) : (
                        <i className="fas fa-user-md"></i>
                      )}
                      <label className="photo-upload-label">
                        <i className="fas fa-camera"></i>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageSelect(e, staff)}
                          className="photo-input"
                        />
                      </label>
                    </div>
                    <span>{staff}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveStaff('rs', index)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    content: {
      title: 'Content Management',
      component: (
        <div className="content-management">
          <div className="schedule-form">
            <h3>ATS Daily Schedule</h3>
            <div className="schedule-items">
              {schedule.map((item) => (
                <div key={item.id} className="schedule-item">
                  <div className="form-group">
                    <label>Activity Name</label>
                    <input
                      type="text"
                      value={editingSchedule[item.id]?.name ?? item.name}
                      onChange={(e) => handleScheduleEdit(item.id, 'name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      type="time"
                      value={editingSchedule[item.id]?.time?.split(' ')[0] ?? item.time.split(' ')[0]}
                      onChange={(e) => {
                        const time = new Date(`2000/01/01 ${e.target.value}`);
                        const formattedTime = time.toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                          hour12: true
                        });
                        handleScheduleEdit(item.id, 'time', formattedTime);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Staff</label>
                    <input
                      type="text"
                      value={editingSchedule[item.id]?.staff ?? item.staff}
                      onChange={(e) => handleScheduleEdit(item.id, 'staff', e.target.value)}
                      placeholder="Staff initials"
                      maxLength="2"
                    />
                  </div>
                  <button
                    className={`update-btn ${editingSchedule[item.id] ? 'active' : ''}`}
                    onClick={() => handleScheduleUpdate(item)}
                    disabled={!editingSchedule[item.id]}
                  >
                    OK
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        {Object.keys(sections).map(section => (
          <button
            key={section}
            className={`sidebar-btn ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {sections[section].title}
          </button>
        ))}
      </div>
      
      <div className="admin-content">
        <h2>{sections[activeSection].title}</h2>
        {sections[activeSection].component ? (
          sections[activeSection].component
        ) : (
          sections[activeSection].forms.map(form => (
            <div key={form.name} className="admin-form">
              <h3>{form.name}</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                {form.fields.map(field => (
                  <div key={field} className="form-group">
                    <label>{field}</label>
                    <input type="text" placeholder={`Enter ${field.toLowerCase()}`} />
                  </div>
                ))}
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          ))
        )}
      </div>

      {selectedImage && (
        <div className="crop-modal-overlay">
          <div className="crop-modal-content">
            <h3>Crop Photo</h3>
            <ImageCropper
              image={selectedImage}
              onComplete={handleCropComplete}
            />
            <button onClick={() => setSelectedImage(null)} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 