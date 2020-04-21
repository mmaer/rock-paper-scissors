import React from 'react';

import HandPaper from '../../../SVG/hand-paper.svg';
import HandRock from '../../../SVG/hand-rock.svg';
import HandScissors from '../../../SVG/hand-scissors.svg';

import './symbol.scss';

const TYPES = {
  PAPER: 'paper',
  ROCK: 'rock',
  SCISSORS: 'scissors',
};

const ICONS = {
  [TYPES.PAPER]: <HandPaper />,
  [TYPES.ROCK]: <HandRock />,
  [TYPES.SCISSORS]: <HandScissors />,
}

const Symbol = ({ type = TYPES.PAPER }) => {
  return (
    <div className="symbol">
      <div className={`symbol__outer symbol__outer--${type}`}>
        <div className="symbol__inner">
          <div className="symbol__symbol">
            {ICONS[type]}
          </div>
        </div>
      </div>
    </div>
  )
};

Symbol.types = TYPES;

export default Symbol;