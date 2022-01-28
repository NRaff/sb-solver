import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './context/store';

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

export const SBContext = React.createContext(sbDetails)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
