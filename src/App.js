import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';

import './app.scss';

const App = () => (
  <div className="app">
    <Header />
    <Game />
    <Footer />
  </div>
);

export default hot(App);