import '../styles/App.css';
import Letters from './Letters';
import Words from './Words';
import Credits from './Credits';

function App() {
  return (
    <div className="App">
      <h1>Spelling Bee Solver</h1>
      <Credits />
      <p className='instructions'>
        Use this tool to un-scramble letters in words. 
        Add the required letter in the <span>yellow</span> space. 
        Note that each character must be unique. 
        Returned words displayed as a yellow <span>pill</span> use all letters provided.
      </p>
      <Letters numLetters={7} />
      <Words />
    </div>
  );
}

export default App;
