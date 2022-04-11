import React from "react";

class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    ChangeColor = () => {
        this.setState((state)=> ({color : 'blue'}))
    }

    render(){
        return(
            <>
                <h2>Ex3</h2>
                <h5>My phone is {this.state.brand}</h5>
                <h3> it is {this.state.color} {this.state.model} from {this.state.year}</h3>
                <button onClick={this.ChangeColor}>Change Color</button>
            </>
        )
    }
}

export default Phone;