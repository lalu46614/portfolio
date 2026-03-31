import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="profile-avatar">👤</div>
          <div>
            <h3>Chris Smith</h3>
            <p>Head of Kajima Community</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Recommendations;
