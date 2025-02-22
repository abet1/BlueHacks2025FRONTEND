import React from 'react'; // Remove useState import

const DonationPopup = ({ address, onConfirm, onClose, donationDetails, setDonationDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.popup}>
      <h3>Donation Details</h3>
      <p>Current Location: {address}</p>
      <input
        type="text"
        name="goods"
        placeholder="Available Goods"
        value={donationDetails.goods}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={donationDetails.quantity}
        onChange={handleChange}
        style={styles.input}
      />
      <button onClick={onConfirm} style={styles.confirmButton}>
        Confirm
      </button>
      <button onClick={onClose} style={styles.closeButton}>
        Back
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
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  confirmButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
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

export default DonationPopup;