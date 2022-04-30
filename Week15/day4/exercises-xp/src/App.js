import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen'


function App() {
  return (
    <div className="App">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile" eventKey="link-1">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/shop" eventKey="link-2">Shop</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path='/' element={<ErrorBoundary> <HomeScreen /> </ErrorBoundary>} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/shop' element={<ErrorBoundary> <ShopScreen /> </ErrorBoundary>} />
      </Routes>




    </div>
  );
}

export default App;
