// src/components/StartingPage.jsx
import React from 'react';
import './StartingPage.css';

const StartingPage = ({ onSelectRole }) => {
  return (
    <div className="starting-page">
      <h1>Welcome to KapBa!</h1>
      <div className="cards-container">
        <div className="card" onClick={() => onSelectRole('victim')}>
          <h2>Victim</h2>
          <p>Click here if you need help.</p>
        </div>
        <div className="card" onClick={() => onSelectRole('victim')}>
          <h2>Responder</h2>
          <p>Click here if you want to help.</p>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;