import React, { useState } from 'react';

import PickSymbol from './PickSymbol';
import Round from './Round';

import './game.scss';

const Game = () => {
  const [userSymbol, setSymbol] = useState('');

  return (
    <div className="game">
      {userSymbol ? <Round userSymbol={userSymbol} setSymbol={setSymbol} /> : <PickSymbol setSymbol={setSymbol} />}
    </div>
  );
};

export default Game;