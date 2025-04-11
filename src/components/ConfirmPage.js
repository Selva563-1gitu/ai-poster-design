import React from 'react';

const ConfirmPage = ({ teamName, onAssign, onBack }) => {
  return (
    <div className="container">
      <h2>Team: {teamName}</h2>
      <button className="confirm-button" onClick={onAssign}>Get Your Poster Topic</button>
      <button onClick={onBack} style={{ marginLeft: '10px' }}>Go Back</button>
    </div>
  );
};

export default ConfirmPage;
