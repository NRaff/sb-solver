import '../styles/reset.css'
import '../styles/App.css';
import Letters from './Letters';
import Words from './Words';
import Credits from './Credits';
import { useSBSelector } from '../context/hooks';

function App() {
  const defaultState = useSBSelector(state => state)
  console.log(defaultState)
  return (
    <div className="App">

      {/* <h1>
        <span>Spelling Bee Solver</span>
        <Credits />
      </h1>
      <p className='instructions'>
        Use this tool to un-scramble letters in words. 
        Add the required letter in the <span>yellow</span> space. 
        Note that each character must be unique. 
        Returned words displayed as a yellow <span>pill</span> use all letters provided.
      </p>
      <Letters numLetters={7} />
      <Words /> */}
    </div>
  );
}

export default App;
