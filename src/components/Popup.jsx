// src/components/Popup.js
import React from 'react';

const Popup = ({ onSelectDisaster, onClose }) => {
  const disasters = [
    { type: 'flood', icon: '🌊', label: 'Flood' },
    { type: 'fire', icon: '🔥', label: 'Fire' },
    { type: 'earthquake', icon: '🌍', label: 'Earthquake' },
    { type: 'medical', icon: '🚑', label: 'Medical Emergency' },
    { type: 'roadblock', icon: '🚧', label: 'Roadblock' },
    { type: 'food', icon: '🍲', label: 'Food/Water' },
    { type: 'shelter', icon: '🏠', label: 'Shelter' },
  ];

  return (
    <div style={styles.popup}>
      <h3>What do you need help with?</h3>
      <div style={styles.iconContainer}>
        {disasters.map((disaster) => (
          <div
            key={disaster.type}
            style={styles.icon}
            onClick={() => onSelectDisaster(disaster.type)}
          >
            <span style={styles.iconText}>{disaster.icon}</span>
            <span>{disaster.label}</span>
          </div>
        ))}
      </div>
      <button onClick={onClose} style={styles.closeButton}>
        Close
      </button>
    </div>
  );
};

const styles = {
  popup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  iconContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '20px 0',
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  iconText: {
    fontSize: '24px',
  },
  closeButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Popup;