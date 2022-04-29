import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0,}
    }
    handleClick = () => {
        this.setState({count : this.state.count+1})
    }

    render(){
        if (this.state.count >= 5) {
            throw Error ('Crashed')
        }
        return(
        <> 
        <p>{this.state.count}</p> 
        <button onClick={this.handleClick}>Add</button>
        </>
        )
    }
}

export default Counter;