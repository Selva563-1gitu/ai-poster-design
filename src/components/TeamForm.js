import React from 'react';

const TeamForm = ({ teamName, setTeamName, onConfirm }) => {
  return (
    <div className="container">
      <h2>Enter Your Team Name</h2>
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Team Name"
      />
      <button className="confirm-button" onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default TeamForm;
