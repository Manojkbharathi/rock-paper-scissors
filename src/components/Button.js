import React, { useState } from 'react';
import { GiRock } from 'react-icons/gi';
import { FaHandPaper, FaHandScissors } from 'react-icons/fa';
import Player from './Player';

const Button = () => {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [computerIcon, setComputerIcon] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  const submitHandler = (icon) => {
    const computerIconOption = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * computerIconOption.length);
    const randomIcon = computerIconOption[randomNumber];

    setSelectedIcon(icon);
    setComputerIcon(randomIcon);
    if (
      (icon === 'rock' && randomIcon === 'scissors') ||
      (icon === 'scissors' && randomIcon === 'paper') ||
      (icon === 'paper' && randomIcon === 'rock')
    ) {
      setResult('Player wins ');
      setPlayerScore(playerScore + 1);
    } else if (icon === randomIcon) {
      setResult("It's a tie");
    } else {
      setResult('computer wins!');
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div>
      <div className='players'>
        <Player
          name='Player'
          score={playerScore}
          selectedIcon={selectedIcon}
          computerIcon={computerIcon}
        />
        <Player
          name='Computer'
          score={computerScore}
          selectedIcon={computerIcon}
          computerIcon={selectedIcon}
        />
      </div>

      <button>
        <GiRock className='icon' onClick={() => submitHandler('rock')} />
      </button>
      <button>
        <FaHandPaper className='icon' onClick={() => submitHandler('paper')} />
      </button>
      <button>
        <FaHandScissors
          className='icon'
          onClick={() => submitHandler('scissors')}
        />
      </button>

      <div>
        <h2>
          Result: <span>{result}</span>
        </h2>
      </div>
    </div>
  );
};

export default Button;
