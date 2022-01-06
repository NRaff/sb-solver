import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import Letters from './Letters';

function App() {
  return (
    <div className="App">
      <h1>SB Solver</h1>
      <Letters numLetters={7} />
    </div>
  );
}

export default App;
