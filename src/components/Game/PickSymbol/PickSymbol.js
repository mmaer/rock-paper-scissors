import React from 'react';

import Symbol from '../Symbol';

import { SYMBOLS } from '../../../constants';

import './pick-symbol.scss';

const PickSymbol = ({ setSymbol }) => (
  <div className="pick-symbol">
    {Object.values(SYMBOLS).map((symbol) => (
      <div key={symbol} className="pick-symbol__symbol">
        <Symbol type={symbol} setSymbol={setSymbol} />
      </div>
    ))}
  </div>
);

export default PickSymbol;