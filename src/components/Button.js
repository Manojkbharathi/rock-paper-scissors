import React, { useState } from 'react';
import { GiRock } from 'react-icons/gi';
import { FaHandPaper, FaHandScissors } from 'react-icons/fa';
import Player from './Player';

const Button = () => {
  const [selectedIcon, setSelectedIcon] = useState(0);

  function clickHandler(icon) {
    setSelectedIcon(icon);
  }
  console.log(selectedIcon);

  return (
    <div>
      <button onClick={() => clickHandler(0)}>
        <GiRock className='icon rock' />
      </button>
      <button onClick={() => clickHandler(1)}>
        <FaHandPaper className='icon paper' />
      </button>
      <button onClick={() => clickHandler(2)}>
        <FaHandScissors className='icon scissors' />
      </button>
    </div>
  );
};

export default Button;
