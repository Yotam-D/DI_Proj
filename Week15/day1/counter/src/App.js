// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
        <Counter />
        </ErrorBoundary>
        <ErrorBoundary>
        <Counter />
        </ErrorBoundary>
        <ErrorBoundary>
        <Counter />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
