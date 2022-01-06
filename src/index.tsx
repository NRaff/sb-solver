import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const sbDetails = {
  searchLetters: "",
  words: []
}

export const SBContext = React.createContext(sbDetails)

ReactDOM.render(
  <SBContext.Provider value={sbDetails}>
    <App />
  </SBContext.Provider>
  ,
  document.getElementById('root')
);
