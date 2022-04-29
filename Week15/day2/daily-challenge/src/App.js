import "./App.css";
import React, { Component } from "react";
import FormComponent from "./components/FormComponent ";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      destination: "",
      nuts: false,
      lactose: false,
      vegan: false,
    };
  }

  handleSubmit = (e) => {
    // e.preventDefault()
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({[e.target.name]: e.target.value})
  }

  handleCheck = (e, info) => {
  console.log(info);
  // this.setState({[info]: true})
  e.target.checked ? this.setState({[info]: true}) : this.setState({[info]: false})
  }

  render() {
    return (
      <>
        <h1>Sample Form</h1>
        <form onSubmit={this.handleSubmit} style={{ display: "block" }}>
          <label>
            <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange}/>
          </label>
          <label>
            <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange}/>
          </label>
          <label>
            <input type="text" name="age" placeholder="Age" onChange={this.handleChange}/>
          </label>
          <label>
            <input type="radio" name="gender" onChange={() => this.handleChange({target: {name: 'gender', value:'male'}})}/> male <br></br>
            <input type="radio" name="gender" onChange={() => this.handleChange({target: {name: 'gender', value:'female'}})}/> female
          </label>
          <label>
            <select name="age">
              <option value="default">--Please Select A Destination--</option>
              <option value="England">England</option>
              <option value="Australia">Australia</option>
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
            </select>
          </label>
          <label>
            <input type="checkbox" name="nuts" onChange={(e) => this.handleCheck(e, 'nuts')}/>Nuts Free <br></br>
            <input type="checkbox" name="lactose" onChange={(e) => this.handleCheck(e, 'lactose')}/> Lactose Free <br></br>
            <input type="checkbox" name="vegan" onChange={(e) => this.handleCheck(e, 'vegan')}/> Vegan <br></br>
          </label>
          <input className="submit" type="submit" value="submit" />
        </form>

        <FormComponent state = {this.state}/>

        {/* <div className="EnteredInfo">
          Your Name: {this.state.firstname + " " + this.state.lastname}
          <br></br>
          Your Age: {this.state.age}
          <br></br>
          Your gender:{" "}
          {this.state.gender}
          <br></br>
          Your Destination: {this.state.destination}
          <br></br>
          Yout Dietary Restrications:<br></br>
          **nuts free : {this.state.nuts ? 'yes' : 'no'}<br></br>
          **lactose free : {this.state.lactose ? 'yes' : 'no'}<br></br>
          **Vegan : {this.state.vegan ? 'yes' : 'no'}<br></br>
        </div> */}
      </>
    );
  }
}

export default App;
