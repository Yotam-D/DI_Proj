import './App.css';
import Counter from './components/Counter';
import {Connect} from 'redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}



export default App;
