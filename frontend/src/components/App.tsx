import '../styles/reset.css'
import '../styles/App.css';
import Letters from './Letters';
import Words from './Words';
import WordButtons from './WordButtons';
import Loader from './Loader';
import { useSBSelector } from '../context/hooks';
import { isLoading } from '../reducers/uiReducer';
import About from './About';

function App() {
  const loading = useSBSelector(isLoading)  
  return (
    <div className="App">
      <About />
      <Letters />
      <WordButtons />
      {loading ? <Loader /> : null}
      <Words />
    </div>
  );
}

export default App;
