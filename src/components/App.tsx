import React, { useContext } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import Letters from './Letters';
import HintButton from './HintButton';
import Words from './Words';
import { SBContext } from '..';
import Credits from './Credits';

function App() {
  const state = useContext(SBContext)
  return (
    <div className="App">
      <Credits />
      <h1>Spelling Bee Solver</h1>
      <Letters numLetters={7} />
      <Words />
    </div>
  );
}

export default App;
