import './App.css';
import {connect} from 'react-redux';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App(props) {
  return (
    <div className="App">
      <h1> Redux Movies </h1>
      <MovieList />
      <MovieDetails />
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
    movies: state.movies,
  }
} 

export default connect(mapStateToProps,null)(App);
