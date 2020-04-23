import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';

import ScoreContext from './contexts/score-context';

import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';

import './app.scss';

const App = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="app">
      <ScoreContext.Provider value={{ score, setScore }}>
        <Header />
        <Game />
        <Footer />
      </ScoreContext.Provider>
    </div>
  );
};

export default hot(App);