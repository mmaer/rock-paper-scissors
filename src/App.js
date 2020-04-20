import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './components/Header';
import Footer from './components/Footer';

import './app.scss';

const App = () => (
  <div className="app">
    <Header />
    <Footer />
  </div>
);

export default hot(App);