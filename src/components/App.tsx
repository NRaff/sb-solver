import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import Letter from './ReqLetter';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Letter required={true}/>
    </div>
  );
}

export default App;
