import React, { useState } from 'react';
import StartingPage from './components/StartingPage';
import Navbar from './components/Navbar';
import Map from './components/Map';
import './App.css';

function App() {
  const [isCallForHelpMode, setIsCallForHelpMode] = useState(false);
  const [isDonateGoodsMode, setIsDonateGoodsMode] = useState(false); // Track donate goods mode
  const [role, setRole] = useState(null); // Track the selected role (victim or responder)
  const [pins, setPins] = useState([]); // Move pins state to App.js to persist across navigation

  // Handle role selection
  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
  };

  // Handle back button click
  const handleBack = () => {
    setRole(null); // Reset the role to return to the starting page
  };

  // Render the appropriate component based on the selected role
  const renderContent = () => {
    if (!role) {
      return <StartingPage onSelectRole={handleSelectRole} />;
    } else if (role === 'victim') {
      return (
        <>
          <Navbar
            onCallForHelp={() => setIsCallForHelpMode(true)}
            onDonateGoods={() => setIsDonateGoodsMode(true)}
            onBack={handleBack}
          />
          <Map
            isCallForHelpMode={isCallForHelpMode}
            setIsCallForHelpMode={setIsCallForHelpMode}
            isDonateGoodsMode={isDonateGoodsMode}
            setIsDonateGoodsMode={setIsDonateGoodsMode}
            pins={pins}
            setPins={setPins}
          />
        </>
      );
    } else if (role === 'responder') {
      return (
        <>
          <Navbar onBack={handleBack} />
          <div className="responder-placeholder">Responder view not implemented yet.</div>
        </>
      );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: role === 'victim' ? 'row' : 'column' }}>
      {renderContent()}
    </div>
  );
}

export default App;