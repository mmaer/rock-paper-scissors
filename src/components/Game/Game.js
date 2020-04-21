import React from 'react';

import ChooseSymbol from './ChooseSymbol';
import Round from './Round';

import './game.scss';

const Game = () => {

  return (
    <div className="game">
      <Round />
    </div>
  )
};

export default Game;