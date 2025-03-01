import React, { useState } from 'react';
import './StaffPhotoModal.css';

const StaffPhotoModal = ({ isOpen, onClose, staffMember, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(staffMember, preview);
      onClose();
      setSelectedFile(null);
      setPreview(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="photo-modal-overlay" onClick={onClose}>
      <div className="photo-modal-content" onClick={e => e.stopPropagation()}>
        <h2>Upload Photo for {staffMember}</h2>
        <div className="photo-upload-area">
          {preview ? (
            <div className="photo-preview">
              <img src={preview} alt="Preview" />
            </div>
          ) : (
            <div className="photo-placeholder">
              <i className="fas fa-camera"></i>
              <span>Click to select photo</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="photo-input"
          />
        </div>
        <div className="photo-modal-buttons">
          <button 
            className="upload-btn"
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload Photo
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffPhotoModal; 