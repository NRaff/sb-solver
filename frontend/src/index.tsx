import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './context/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WordCard from './components/WordCard';
import { getLetters } from './util/wordsAPI';

const sbDetails = {
  requiredLetter: "",
  searchLetters: "",
  words: []
}

declare global {
  interface Window {
    requestWords: Function,
    getLetters: Function
  }
}

export const SBContext = React.createContext(sbDetails)

document.addEventListener('DOMContentLoaded', () => {
  window.getLetters = getLetters
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
