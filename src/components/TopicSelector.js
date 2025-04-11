import React from 'react';
import { motion } from 'framer-motion';

const TopicSelector = ({ teamName, assignedTopic }) => {
  return (
    <div className="container">
      <motion.div
        className="topic-box"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 5, -5, 0] }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3>🎉 Team: {teamName}</h3>
        <p><strong>Title:</strong> {assignedTopic.title}</p>
        
      </motion.div>
    </div>
  );
};

export default TopicSelector;
