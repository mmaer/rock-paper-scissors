import React, { useContext } from 'react';

import ScoreContext from '../../contexts/score-context';

import './header.scss';

const Header = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__title">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </div>
        <div className="header__score">
          <div className="header__score-text">SCORE</div>
          <div className="header__score-points">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
