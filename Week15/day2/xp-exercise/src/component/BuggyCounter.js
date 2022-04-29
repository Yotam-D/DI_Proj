import React, { Component } from 'react';

class BuggyCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0,
        }
    }
    handleClick = () =>{
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        if (this.state.counter >= 5) {
            throw Error ('I Crahsed')
        }
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}> Add </button>
            </div>
        );
    }
}

export default BuggyCounter;