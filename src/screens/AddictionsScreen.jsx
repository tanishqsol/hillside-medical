import React, { useState } from 'react';
import './AddictionsScreen.css';

const AddictionsScreen = () => {
  const [selectedAddiction, setSelectedAddiction] = useState(null);

  const addictions = [
    {
      name: 'Alcohol Addiction',
      icon: 'fa-wine-bottle',
      description: 'Alcohol addiction is a chronic disease affecting millions worldwide. It involves compulsive alcohol use despite negative consequences.',
      symptoms: [
        'Inability to limit drinking',
        'Withdrawal symptoms when not drinking',
        'Building tolerance to alcohol',
        'Neglecting responsibilities'
      ],
      treatment: 'Treatment typically includes detoxification, counseling, and support groups like AA.',
      risks: [
        'Liver disease',
        'Heart problems',
        'Mental health issues',
        'Increased risk of accidents'
      ]
    },
    {
      name: 'Heroin Addiction',
      icon: 'fa-syringe',
      description: 'Heroin addiction is a severe opioid use disorder that can develop rapidly due to the drug\'s highly addictive nature.',
      symptoms: [
        'Intense drug cravings',
        'Severe withdrawal symptoms',
        'Track marks on arms',
        'Changes in behavior and appearance'
      ],
      treatment: 'Treatment includes medically supervised detox, medication-assisted treatment (MAT), and comprehensive therapy.',
      risks: [
        'Overdose risk',
        'HIV/hepatitis risk',
        'Organ damage',
        'Death'
      ]
    },
    {
      name: 'Opioid Addiction',
      icon: 'fa-pills',
      description: 'Opioid addiction often begins with prescription painkillers and can lead to dependence and severe health consequences.',
      symptoms: [
        'Doctor shopping for prescriptions',
        'Physical dependence',
        'Withdrawal when stopping',
        'Using more than prescribed'
      ],
      treatment: 'Comprehensive treatment includes medication, counseling, and long-term support programs.',
      risks: [
        'Respiratory depression',
        'Overdose potential',
        'Physical dependence',
        'Withdrawal complications'
      ]
    },
    {
      name: 'Methamphetamine Addiction',
      icon: 'fa-vial',
      description: 'Methamphetamine (meth) is a powerful stimulant that can cause rapid addiction and severe physical and mental health problems.',
      symptoms: [
        'Severe tooth decay',
        'Paranoia and anxiety',
        'Aggressive behavior',
        'Dramatic weight loss'
      ],
      treatment: 'Treatment focuses on behavioral therapies and long-term rehabilitation programs.',
      risks: [
        'Brain damage',
        'Severe dental problems',
        'Heart complications',
        'Psychosis'
      ]
    },
    {
      name: 'Cocaine Addiction',
      icon: 'fa-powder',
      description: 'Cocaine addiction is characterized by intense cravings and can lead to serious cardiovascular problems and other health issues.',
      symptoms: [
        'Frequent nose bleeds',
        'Financial problems',
        'Mood swings',
        'Increased heart rate'
      ],
      treatment: 'Treatment includes behavioral therapy, support groups, and addressing underlying mental health issues.',
      risks: [
        'Heart attacks',
        'Stroke',
        'Respiratory failure',
        'Mental health disorders'
      ]
    }
  ];

  return (
    <div className="addictions-screen">
      <h1>Types of Addiction</h1>
      <div className="addictions-grid">
        {addictions.map((addiction, index) => (
          <div 
            key={index} 
            className="addiction-card"
            onClick={() => setSelectedAddiction(addiction)}
          >
            <i className={`fas ${addiction.icon}`}></i>
            <h2>{addiction.name}</h2>
            <p>{addiction.description}</p>
          </div>
        ))}
      </div>

      {selectedAddiction && (
        <div className="modal-overlay" onClick={() => setSelectedAddiction(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedAddiction(null)}
            >
              ×
            </button>
            <i className={`fas ${selectedAddiction.icon} modal-icon`}></i>
            <h2>{selectedAddiction.name}</h2>
            <p>{selectedAddiction.description}</p>
            <div className="symptoms-list">
              <h3>Common Symptoms:</h3>
              <ul>
                {selectedAddiction.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
              <h3>Treatment Approach:</h3>
              <p>{selectedAddiction.treatment}</p>
              <h3>Health Risks:</h3>
              <ul>
                {selectedAddiction.risks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddictionsScreen; 