import React, { useState } from 'react';
import './ATSInfo.css';

const ATSInfo = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCSSDetails, setShowCSSDetails] = useState(false);

  return (
    <div className="ats-info-container">
      <div className="ats-info-dropdown">
        <button 
          className="ats-toggle"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>ATS - Acute Treatment Service</span>
          <i className={`fas fa-chevron-${showDetails ? 'up' : 'down'}`}></i>
        </button>
        
        <div className={`ats-content ${showDetails ? 'show' : ''}`}>
          <h2>Acute Treatment Services (ATS) Phase Overview</h2>
          
          <div className="ats-description">
            <p>
              Acute Treatment Services (ATS) at Hillside Detox is a medically managed detox program that provides 24/7 clinical support to help individuals safely withdraw from drugs and alcohol. This phase is designed to stabilize patients, manage withdrawal symptoms, and prepare them for ongoing addiction treatment.
            </p>
          </div>

          <div className="ats-sections">
            <div className="ats-section">
              <h3>ATS Detox Process</h3>
              <div className="process-step">
                <h4>Comprehensive Medical Evaluation</h4>
                <ul>
                  <li>Assess physical and mental health</li>
                  <li>Identify substance use history</li>
                  <li>Develop a personalized treatment plan</li>
                </ul>
              </div>
              <div className="process-step">
                <h4>Stabilization</h4>
                <ul>
                  <li>Medical supervision to manage withdrawal symptoms</li>
                  <li>Medication-assisted treatment (MAT) to reduce discomfort and prevent relapse</li>
                  <li>24/7 clinical and emotional support</li>
                </ul>
              </div>
              <div className="process-step">
                <h4>Transition to Ongoing Treatment</h4>
                <ul>
                  <li>Once detox is complete, patients are guided into residential or outpatient programs</li>
                  <li>Therapy, group support, and relapse prevention begin</li>
                </ul>
              </div>
            </div>

            <div className="ats-section">
              <h3>🔹 ATS Medication Times</h3>
              <div className="med-times">
                {['8:00 AM', '12:00 PM', '4:00 PM', '8:00 PM'].map((time, index) => (
                  <div key={index} className="med-time">
                    <i className="fas fa-pills"></i>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
              <p className="med-note">(Times are flexible by +/- 1 hour based on individual needs.)</p>
            </div>

            <div className="ats-section">
              <h3>🔹 Key Benefits of ATS at Hillside Detox</h3>
              <ul className="benefits-list">
                <li>✅ 24-hour medical monitoring to ensure safety</li>
                <li>✅ Personalized detox plans based on patient needs</li>
                <li>✅ Medication-assisted withdrawal management</li>
                <li>✅ Comprehensive addiction treatment planning</li>
                <li>✅ Supportive environment for long-term recovery</li>
              </ul>
            </div>
          </div>

          <div className="ats-footer">
            <p>This ATS phase provides a structured, medically supervised detox experience to set the foundation for sustained addiction recovery.</p>
          </div>
        </div>
      </div>

      <div className="css-info-dropdown">
        <button 
          className="ats-toggle"
          onClick={() => setShowCSSDetails(!showCSSDetails)}
        >
          <span>What is Inpatient Rehab - CSS (Clinical Stabilization Services)?</span>
          <i className={`fas fa-chevron-${showCSSDetails ? 'up' : 'down'}`}></i>
        </button>
        
        <div className={`ats-content ${showCSSDetails ? 'show' : ''}`}>
          <div className="ats-description">
            <p>
              Inpatient rehab or CSS is a 24/7 residential addiction treatment program designed for individuals struggling with substance use disorders. These programs provide medical supervision, therapy, and holistic treatments in a structured environment to help individuals achieve long-term sobriety.
            </p>
          </div>

          <div className="ats-sections">
            <div className="ats-section">
              <h3>🔹 What Happens in Inpatient Rehab?</h3>
              <div className="process-step">
                <h4>Medical & Psychological Assessment</h4>
                <ul>
                  <li>Patients undergo comprehensive evaluations by doctors, nurses, psychiatrists, and addiction specialists.</li>
                  <li>A personalized treatment plan is developed.</li>
                </ul>
              </div>
              <div className="process-step">
                <h4>Therapy & Counseling</h4>
                <ul>
                  <li>Individual therapy sessions with addiction counselors.</li>
                  <li>Group therapy and 12-step meetings for peer support.</li>
                  <li>Holistic treatments like yoga, meditation, art therapy, and music therapy.</li>
                </ul>
              </div>
              <div className="process-step">
                <h4>Education & Relapse Prevention</h4>
                <ul>
                  <li>Patients learn about addiction triggers, coping strategies, and long-term recovery tools.</li>
                  <li>Development of a relapse prevention plan for continued sobriety.</li>
                </ul>
              </div>
              <div className="process-step">
                <h4>Aftercare Planning</h4>
                <ul>
                  <li>Patients transition into outpatient care or partial hospitalization programs (PHPs).</li>
                  <li>Long-term recovery support through continued counseling and group meetings.</li>
                </ul>
              </div>
            </div>

            <div className="ats-section">
              <h3>🔹 Inpatient Rehab Timeline</h3>
              <ul className="timeline-list">
                <li>Short-term Rehab: 14-28 days</li>
                <li>Long-term Rehab: 30-90+ days</li>
                <li>Length of stay depends on addiction severity and individual progress.</li>
              </ul>

              <h3>🔹 Cost & Insurance Coverage</h3>
              <ul className="coverage-list">
                <li>The cost varies based on the length of stay and specific treatments received.</li>
                <li>Most insurance plans are accepted, and financial assistance is available.</li>
              </ul>

              <h3>🔹 How to Start Inpatient Treatment</h3>
              <ul className="contact-list">
                <li>Call (781) 332-4135 to speak with an admissions coordinator.</li>
                <li>Pre-admission assessment determines treatment needs and insurance coverage.</li>
              </ul>
            </div>

            <div className="ats-section">
              <h3>🔹 World-Class Amenities at Hillside Detox</h3>
              <ul className="amenities-list">
                <li>✅ Cell phones allowed</li>
                <li>✅ Gym & fitness center</li>
                <li>✅ Onsite spa services</li>
                <li>✅ Entertainment theatre</li>
                <li>✅ Recreation room</li>
                <li>✅ Support animal-friendly environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATSInfo; 