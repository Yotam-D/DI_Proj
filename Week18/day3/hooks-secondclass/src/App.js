import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import TestContext from './TestContext';

export const AppContext = React.createContext(null);

function App() {
  const [counter, setCounter] = useState(0)


  return (
    <div className="App">
      <header>
        <h1>{counter}</h1>
        <button onClick = {()=>setCounter(counter+1)}>plus</button>
        <AppContext.Provider value = {{counter, setCounter}}>
          <TestContext />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
