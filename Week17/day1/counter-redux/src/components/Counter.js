import React, {Component} from 'react';
import {connect} from 'react-redux';


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0 ,
        }
    }
    // add = () => {
    //     this.setState({counter:this.state.counter+1})
    // }
    substract = () => {
        this.setState({counter:this.state.counter-1})
    }


    render(){
        return(
            <>
                <div>{this.props.rdxCounter}</div>
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      rdxCounter: state.counter,
    }
  }

const mapActionsToProps = (dispatch) => {
    return {
        add: 
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Counter);