// import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
      <Car model={carinfo.model} />
      <Events/>
      <Phone />
      <Color />
    </div>
  );
}

export default App;
