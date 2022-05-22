import React, {Component} from 'react'
import './App.css';
import FirstName from './components/FirstName'
import SecondName from './components/SecondName'
import ClickButton from './components/ClickButton'
import Result from './components/Result';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstN: '',
      secondN: '',
      reuslt:'',
      percentage: ''
    }
  }

  handleChange = (e) =>{
    if (e.target.name == "firstInp"){
      this.setState({firstN: e.target.value})
    } else {
      this.setState({secondN: e.target.value})
    }
  }

  handleClick = () => {
    console.log('click!');
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '5473db0d60msh3267219b34229f4p147815jsna12728464b94'
      }
    };
    
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.state.firstN}&fname=${this.state.secondN}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <FirstName handleFnc = {this.handleChange}/>
          <SecondName handleFnc = {this.handleChange}/>
          <ClickButton handleClk = {this.handleClick}/>
          <Result />
          
        </header>
      </div>
    );
  }
}

export default App;
