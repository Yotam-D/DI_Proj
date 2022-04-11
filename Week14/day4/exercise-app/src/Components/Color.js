import React from "react";

class Color extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteColor: 'Red',  
        }
    }
    componentDidMount = () =>{
        setTimeout(() => {
            this.setState((state)=>({favoriteColor: 'Yellow'}))
        }, 5000);
    }
    handleChangeFavoritColor = () => {
        this.setState((state) => ({favoriteColor: 'Blue'}))
    }

    render(){
        return(
            <>
            <h2>Ex4</h2>
            <h3>My Favorite Color is {this.state.favoriteColor}</h3>
            <button onClick={this.handleChangeFavoritColor}>Change Favorite Color</button>
            </>
        )
    }
}

export default Color;