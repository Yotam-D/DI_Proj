// import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from './components/UserFavoriteColors';
import Exercise4 from './components/Exercise4';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <header className="App-header">
        {myelement}
        <p>react is {sum} times better with JSX</p>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <UserFavoriteColors fav_animals = {['monkey','panda','bird']}/>
      </header>
      <Exercise4 />
    </div>
  );
}

export default App;
