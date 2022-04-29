import React from 'react';

class Voter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='voteBox'>
                {this.props.counter} {this.props.name} <span> <button>Click Here!</button> </span>
            </div> 
            
        )
    }
}