import React from 'react';
import { GiRock } from 'react-icons/gi';
import { FaHandPaper, FaHandScissors } from 'react-icons/fa';

const Computer = () => {
  return (
    <div className='computer'>
      <h4>
        Computer: <span>0</span>
        <FaHandPaper size={80} style={{ margin: '1rem' }} />
      </h4>
    </div>
  );
};

export default Computer;
