import React from 'react';
import { GiRock } from 'react-icons/gi';
import { FaHandPaper, FaHandScissors } from 'react-icons/fa';

const Player = ({ name = 'player', score = 0, selectedIcon }) => {
  let iconComponent = null;

  if (selectedIcon === 'rock') {
    iconComponent = <GiRock size={80} />;
  } else if (selectedIcon === 'paper') {
    iconComponent = <FaHandPaper size={80} />;
  } else if (selectedIcon === 'scissors') {
    iconComponent = <FaHandScissors size={80} />;
  }
  return (
    <div className='player'>
      <div>
        {name}: {score}
      </div>
      <div>{iconComponent}</div>
    </div>
  );
};

export default Player;
