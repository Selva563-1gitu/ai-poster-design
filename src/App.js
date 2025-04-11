import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import ConfirmPage from './components/ConfirmPage';
import TopicSelector from './components/TopicSelector';
import topics from './data/topics';
import html2canvas from 'html2canvas';

function App() {
  const [step, setStep] = useState(1);
  const [teamName, setTeamName] = useState('');
  const [assignedTopic, setAssignedTopic] = useState(null);
  const [usedTopics, setUsedTopics] = useState([]);

  const handleConfirm = () => {
    if (teamName.trim()) {
      setStep(2);
    } else {
      alert("Please enter a team name.");
    }
  };

  const handleAssign = async () => {
    const remainingTopics = topics.filter((_, index) => !usedTopics.includes(index));
    if (remainingTopics.length === 0) {
      alert('All topics have been assigned!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingTopics.length);
    const selectedTopic = remainingTopics[randomIndex];
    const topicIndex = topics.indexOf(selectedTopic);

    setAssignedTopic(selectedTopic);
    setUsedTopics([...usedTopics, topicIndex]);
    setStep(3);

    // Capture screenshot after small delay
    setTimeout(() => {
      html2canvas(document.body).then(canvas => {
        const link = document.createElement('a');
        link.download = `${teamName}_topic.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }, 1000);
  };

  const handleBack = () => {
    setStep(1); // go back to team input
    setTeamName('');
  };

  return (
    <div>
      {step === 1 && (
        <TeamForm teamName={teamName} setTeamName={setTeamName} onConfirm={handleConfirm} />
      )}
      {step === 2 && (
        <ConfirmPage teamName={teamName} onAssign={handleAssign} onBack={handleBack} />
      )}
      {step === 3 && assignedTopic && (
        <TopicSelector teamName={teamName} assignedTopic={assignedTopic} />
      )}
    </div>
  );
}

export default App;
