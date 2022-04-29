import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props);
        console.log(this.props.state);
        return (
            <div className="EnteredInfo">

            Your Name: {this.props.state.firstname + " " + this.props.state.lastname}
            <br></br>
            Your Age: {this.props.state.age}
            <br></br>
            Your gender:{" "}
            {this.props.state.gender}
            <br></br>
            Your Destination: {this.props.state.destination}
            <br></br>
            Yout Dietary Restrications:<br></br>
            **nuts free : {this.props.state.nuts ? 'yes' : 'no'}<br></br>
            **lactose free : {this.props.state.lactose ? 'yes' : 'no'}<br></br>
            **Vegan : {this.props.state.vegan ? 'yes' : 'no'}<br></br>
          </div>
        )
    }
}

export default FormComponent ;