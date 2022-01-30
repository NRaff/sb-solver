import '../styles/reset.css'
import '../styles/App.css';
import Letters from './Letters';
import Words from './Words';
import WordButtons from './WordButtons';
import Loader from './Loader';
import { useSBSelector } from '../context/hooks';
import { isLoading, isShowing } from '../reducers/uiReducer';
import About from './About';
import WordCard from './WordCard';

function App() {
  const loading = useSBSelector(isLoading)  
  const wordShowing = useSBSelector(isShowing)
  return (
    <div className="App">
      <About />
      <Letters />
      <WordButtons />
      {loading ? <Loader /> : null}
      <Words />
      {wordShowing ? <WordCard /> : null}
    </div>
  );
}

export default App;
