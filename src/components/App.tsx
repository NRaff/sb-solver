import React, { useContext } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import Letters from './Letters';
import HintButton from './HintButton';
import Words from './Words';
import { SBContext } from '..';

function App() {
  const state = useContext(SBContext)
  return (
    <div className="App">
      <h1>SB Solver</h1>
      <Letters numLetters={7} />
      <HintButton />
      <Words words={state.words}/>
    </div>
  );
}

export default App;
