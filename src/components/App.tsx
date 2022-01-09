import '../styles/App.css';
import Letters from './Letters';
import Words from './Words';
import Credits from './Credits';

function App() {
  return (
    <div className="App">
      <Credits />
      <h1>Spelling Bee Solver</h1>
      <Letters numLetters={7} />
      <Words />
    </div>
  );
}

export default App;
