import React, { useEffect, useState, useContext } from 'react';

import ScoreContext from '../../../contexts/score-context';

import { SYMBOLS, TIME_FOR_COMPUTER_SYMBOL } from '../../../constants';

import Symbol from '../Symbol';

import './round.scss';

const RESULTS_TYPES = {
  WIN: 'win',
  LOST: 'lost',
  REMIS: 'remis',
};

const POINTS = {
  [RESULTS_TYPES.WIN]: score => score + 1,
  [RESULTS_TYPES.REMIS]: score => score,
  [RESULTS_TYPES.LOST]: score => score - 1,
};

const SCORE_TEST = {
  [RESULTS_TYPES.WIN]: 'YOU WIN',
  [RESULTS_TYPES.REMIS]: 'REMIS',
  [RESULTS_TYPES.LOST]: 'YOU LOSE',
};

const RESULTS = {
  [SYMBOLS.PAPER]: {
    [SYMBOLS.ROCK]: RESULTS_TYPES.WIN,
    [SYMBOLS.SCISSORS]: RESULTS_TYPES.LOST,
    [SYMBOLS.PAPER]: RESULTS_TYPES.REMIS,
  },
  [SYMBOLS.ROCK]: {
    [SYMBOLS.SCISSORS]: RESULTS_TYPES.WIN,
    [SYMBOLS.PAPER]: RESULTS_TYPES.LOST,
    [SYMBOLS.ROCK]: RESULTS_TYPES.REMIS,
  },
  [SYMBOLS.SCISSORS]: {
    [SYMBOLS.PAPER]: RESULTS_TYPES.WIN,
    [SYMBOLS.ROCK]: RESULTS_TYPES.LOST,
    [SYMBOLS.SCISSORS]: RESULTS_TYPES.REMIS,
  },
};

const getComputerSymbol = () => {
  const symbols = [...Object.values(SYMBOLS)];
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const Round = ({ userSymbol, setSymbol }) => {
  const { score, setScore } = useContext(ScoreContext);
  const [result, setResult] = useState(undefined);
  const [computerSymbol, setComputerSymbol] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const computerSymbol = getComputerSymbol();
      const result = RESULTS[userSymbol][computerSymbol];
      const newResult = POINTS[result](score);

      setScore(newResult);
      setResult(result);
      setComputerSymbol(computerSymbol);
    }, TIME_FOR_COMPUTER_SYMBOL);
  });

  const playAgain = () => {
    setSymbol('');
  };

  return (
    <div className="round">
      <div>
        <div className="round__text">YOU PICKED</div>
        <div className="round__symbol">
          <Symbol type={userSymbol} className={result === RESULTS_TYPES.WIN ? 'symbol--win' : ''} tabIndex={0} />
        </div>
      </div>
      {computerSymbol && (
        <div>
          <h2 className="round__score-text">{SCORE_TEST[result]}</h2>
          <button className="round__button" onClick={playAgain}>
            PLAY AGAIN
          </button>
        </div>
      )}
      <div>
        <div className="round__text">THE HOUSE PICKED</div>
        <div className="round__symbol">
          {computerSymbol ? (
            <Symbol type={computerSymbol} className={result === RESULTS_TYPES.LOST ? 'symbol--win' : ''} tabIndex={0} />
          ) : (
            <div className="round__empty-symbol" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Round;
