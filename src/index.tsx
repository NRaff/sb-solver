import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import getWords from './util/wordsAPI';

const sbDetails = {
  requiredLetter: "",
  searchLetters: "",
  words: []
}

export const SBContext = React.createContext(sbDetails)

declare global {
  interface Window {
    getWords: Function
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.getWords = getWords
})

ReactDOM.render(
  <React.StrictMode>
    <SBContext.Provider value={sbDetails}>
        <App />
    </SBContext.Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
