import BuggyCounter from './component/BuggyCounter';
import ErrorBoundary from './component/ErrorBoundary';
import ColorBtn from './component/ColorBtn';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* sim 1 */}
        {/* <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary> */}
        {/* sim 2 */}
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        {/* sim 3 */}
          {/* <BuggyCounter /> */}
      </header>
      <h1> Ex2 - Ex3 </h1>
      <ColorBtn />
    </div>
  );
}

export default App;
