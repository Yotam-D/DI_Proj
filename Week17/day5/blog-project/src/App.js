import './style.css';
import NavBar from './components/NavBar';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path = "/" element = {<Home/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/contact" element = {<Contact/>}></Route>
          <Route path = "/posts/:id" element = {<Post/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;