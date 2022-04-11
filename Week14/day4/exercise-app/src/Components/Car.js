import React from 'react';
import Garage from './Garage';

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            color: 'Red',
        }
    }

    render(){
        return(
            <>
            <header className="App-header">
            <h1>Ex1</h1>
            this car is {this.state.color} {this.props.model} 
            <h2>part 2</h2>
            <Garage size="12 square feet"/>
            </header>
            </>
        )
    }
}

export default Car;