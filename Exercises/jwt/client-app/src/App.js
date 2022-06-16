import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path = '/login' element ={<Login title='Login' />} />
        <Route path = '/register' element ={<Login title='Register' />} />
        <Route path = '/' element ={<Home />} />
        <Route path = '/home' element ={<Home />} />
        <Route path = '/about' element ={<About />} />
      </Routes>
    </div>
  );
}

export default App;
