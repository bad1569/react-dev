import React, { useState } from 'react';
import PollOption from './PollOption';

const App = () => {
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rabbit', count: 0 },
  ]);

  
  const handleVote = (index) => {
    const newOptions = [...options];
    newOptions[index].count += 1;
    setOptions(newOptions);
  };

  
  const getLeader = () => {
    const leader = options.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    });
    return leader;
  };

  const leader = getLeader();

  return (
    <div>
      <h1>Pet Poll</h1>
      <div>
        {options.map((option, index) => (
          <PollOption
            key={index}
            label={option.option}
            count={option.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      <div>
        <h2>Current Leader: {leader.option} with {leader.count} votes</h2>
      </div>
    </div>
  );
};

export default App;
