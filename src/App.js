import React from 'react';

import Button from './components/Button';
import Computer from './components/Computer';
import Player from './components/Player';
import Result from './components/Result';

const App = () => {
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div className='players'>
        <Player />
        <Computer />
      </div>

      <Result />
      <Button />
    </div>
  );
};

export default App;
