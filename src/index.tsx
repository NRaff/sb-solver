import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {searchWords, getDefinition} from './util/wordsAPI';

const sbDetails = {
  requiredLetter: "",
  searchLetters: "",
  words: []
}

export const SBContext = React.createContext(sbDetails)

declare global {
  interface Window {
    getWords: Function,
    searchWords: Function,
    searchWord: Function,
    newSearch: Function,
    getDefinition: Function
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.searchWords = searchWords
  window.getDefinition = getDefinition
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
