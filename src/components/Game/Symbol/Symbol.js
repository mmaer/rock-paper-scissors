import React from 'react';

import HandPaper from '../../../SVG/hand-paper.svg';
import HandRock from '../../../SVG/hand-rock.svg';
import HandScissors from '../../../SVG/hand-scissors.svg';

import { SYMBOLS } from '../../../constants';

import './symbol.scss';

const ICONS = {
  [SYMBOLS.PAPER]: <HandPaper />,
  [SYMBOLS.ROCK]: <HandRock />,
  [SYMBOLS.SCISSORS]: <HandScissors />,
};

const Symbol = ({ type, setSymbol = () => {}, className = '', tabIndex }) => {
  const onCLick = () => {
    setSymbol(type);
  };

  return (
    <div className={`symbol ${className}`} onClick={onCLick} onKeyPress={onCLick} role="button" tabIndex={tabIndex}>
      <div className={`symbol__outer symbol__outer--${type}`}>
        <div className="symbol__inner">
          <div className="symbol__symbol">{ICONS[type]}</div>
        </div>
      </div>
    </div>
  );
};

export default Symbol;
