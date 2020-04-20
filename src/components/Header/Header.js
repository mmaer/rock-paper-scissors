import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header__content">
      <div className="header__title">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="header__score">
        <div className="header__score-text">
          SCORE
        </div>
        <div className="header__score-points">
          12
        </div>
      </div>
    </div>
  </div>
);

export default Header;