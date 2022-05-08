import './App.css';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h1> Redux Movies </h1>
      <h2>Movies List</h2>
      {props.movies.map(element => {
        
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
    movies: state.movies,
  }
} 

export default connect(mapStateToProps,null)(App);
