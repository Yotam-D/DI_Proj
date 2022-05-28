import logo from './logo.svg';
import './App.css';
import {createContext, useState, useEffect} from 'react';
import UsingContext from './components/UsingContext';


export const AppContext = createContext(null)


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter</h2>
        <h3>{counter}</h3>
        <button onClick = {()=>setCounter(counter+1)}>+</button>
        <button onClick = {()=>setCounter(counter-1)}>-</button>
        <AppContext.Provider value = {{counter, setCounter}}>
          <UsingContext/>
        </AppContext.Provider>
        
      </header>
    </div>
  );
}

export default App;
