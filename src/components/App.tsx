import '../styles/App.css';
import Letters from './Letters';
import Words from './Words';
import Credits from './Credits';

function App() {
  return (
    <div className="App">
      <Credits />
      <h1>Spelling Bee Solver</h1>
      <p className='instructions'>Use this tool to un-scramble letters in words. Add the required letter in the <span>yellow</span> space. Note that each character must be unique.</p>
      <Letters numLetters={7} />
      <Words />
    </div>
  );
}

export default App;
