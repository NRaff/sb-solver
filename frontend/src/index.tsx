import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { requestWords } from './util/wordsAPI';

const sbDetails = {
  requiredLetter: "",
  searchLetters: "",
  words: []
}

declare global {
  interface Window {
    requestWords: Function,
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // window.requestWords = requestWords
  ReactDOM.render(
    <React.StrictMode>
      <SBContext.Provider value={sbDetails}>
        <App />
      </SBContext.Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
})

export const SBContext = React.createContext(sbDetails)
