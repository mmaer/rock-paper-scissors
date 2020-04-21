import React from 'react';

import Symbol from '../Symbol';


import './round.scss';

const Round = () => {

  return (
    <div className="round">
      <div className="round__picked">
        <div className="round__text">
          YOU PICKED
        </div>
        <div className="round__symbol">
          <Symbol type={Symbol.types.SCISSORS} />
        </div>
      </div>
      <div className="round__score">
        <h2 className="round__score-text">YOU WIN</h2>
        <button className="round__button">PLAY AGAIN</button>
      </div>
      <div className="round__picked">
        <div className="round__text">
          THE HOUSE PICKED
        </div>
        <div className="round__symbol">
          <Symbol type={Symbol.types.SCISSORS} />
        </div>
      </div>
      
    </div>
  );
};

export default Round;