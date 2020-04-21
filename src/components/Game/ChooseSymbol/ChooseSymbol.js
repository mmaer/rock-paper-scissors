import React from 'react';

import Symbol from '../Symbol';

import './choose-symbol.scss';

const ChooseSymbol = () => {
  return (
    <div className="choose-symbol">
      <Symbol type={Symbol.types.PAPER} />
      <Symbol type={Symbol.types.SCISSORS} />
      <Symbol type={Symbol.types.ROCK} />
    </div>
  )
};

export default ChooseSymbol;