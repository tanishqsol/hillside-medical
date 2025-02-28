import React, { useState } from 'react';
import './TeamScreen.css';

const TeamScreen = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      designation: 'Chief Medical Officer',
      photo: 'https://placehold.co/300x300/007AFF/white?text=SJ',
      bio: 'Dr. Johnson has over 15 years of experience in healthcare management and clinical practice. She specializes in implementing innovative healthcare solutions.',
    },
    {
      name: 'Dr. Michael Chen',
      designation: 'Head of Surgery',
      photo: 'https://placehold.co/300x300/007AFF/white?text=MC',
      bio: 'Dr. Chen is a renowned surgeon with expertise in minimally invasive procedures. He has performed over 1000 successful surgeries.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      designation: 'Head of Pediatrics',
      photo: 'https://placehold.co/300x300/007AFF/white?text=ER',
      bio: 'Dr. Rodriguez is dedicated to providing compassionate care to children. She has specialized training in pediatric emergency medicine.',
    },
    {
      name: 'Dr. James Wilson',
      designation: 'Head of Cardiology',
      photo: 'https://placehold.co/300x300/007AFF/white?text=JW',
      bio: 'Dr. Wilson is a leading expert in cardiovascular health. He pioneered several cardiac treatment procedures at our facility.',
    },
    {
      name: 'Dr. Lisa Thompson',
      designation: 'Head of Neurology',
      photo: 'https://placehold.co/300x300/007AFF/white?text=LT',
      bio: 'Dr. Thompson specializes in neurological disorders and has contributed to groundbreaking research in neuroscience.',
    },
    {
      name: 'Dr. Robert Kim',
      designation: 'Head of Oncology',
      photo: 'https://placehold.co/300x300/007AFF/white?text=RK',
      bio: 'Dr. Kim is committed to advancing cancer treatment through innovative therapies and personalized care approaches.',
    }
  ];

  return (
    <div className="team-screen">
      <h1>Our Medical Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="team-member"
            onClick={() => setSelectedMember(member)}
          >
            <div className="photo-container">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.designation}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            <div className="photo-container">
              <img src={selectedMember.photo} alt={selectedMember.name} />
            </div>
            <h2>{selectedMember.name}</h2>
            <p>{selectedMember.designation}</p>
            <p style={{ marginTop: '20px' }}>{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamScreen; 