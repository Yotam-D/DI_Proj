import './App.css';
import Counter from './components/Counter';
import {connect} from 'react-redux';
import {getUsers} from './redux/actions'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <button onClick={props.getUsers}>Get Users</button>
        {
          props.usersArr.map((item,i) => {
            return(
              <div key={i}>{item.name}</div>
            )
          })
        }
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    usersArr: state.users_reducer.usersArr,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getUsers: () => dispatch(getUsers())
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
