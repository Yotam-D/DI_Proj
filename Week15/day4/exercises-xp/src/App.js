import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen'
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';


function App() {
  return (
    <div className="App">
      <header>EX1</header>
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
      <br></br>
      <br></br>
      <h2>EX2</h2>
      <PostList/>
      <br></br>
      <br></br>
      <Example1 />
      <Example2 />
      <Example3 />


    </div>
  );
}

export default App;
