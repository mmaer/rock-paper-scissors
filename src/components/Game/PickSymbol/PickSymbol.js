import React from 'react';

import Symbol from '../Symbol';

import { SYMBOLS } from '../../../constants';

import './pick-symbol.scss';

const PickSymbol = ({ setSymbol }) => (
  <div className="pick-symbol">
    {Object.values(SYMBOLS).map((symbol) => <Symbol key={symbol} type={symbol} onClick={setSymbol} />)}
  </div>
);

export default PickSymbol;