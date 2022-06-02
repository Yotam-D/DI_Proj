import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header> 
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/favorites" eventKey="link-1">Favorite</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/favorites" element = {<h4>Favorites</h4>} />
      </Routes>
    </div>
  );
}

export default App;
