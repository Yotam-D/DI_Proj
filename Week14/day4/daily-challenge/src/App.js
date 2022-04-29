import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
    }
  }
  increaseCount = (e) => {
    console.log(e);
    // this.setState((state) => ({e,target,name: state{e,target.name}+1}))
  }

  render(){
      return (
        <div className="App">
            <h1>Vote Your Language!</h1>
        </div>
      );
  }
}

export default App;
