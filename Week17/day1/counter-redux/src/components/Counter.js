import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, substract} from '../redux/actions'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0 ,
        }
    }

    render(){
        return(
            <>
                <div>{this.props.rdxCounter}</div>
                <button onClick={this.props.rdxAdd}>+</button>
                <button onClick={this.props.rdxSubstract}>-</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      rdxCounter: state.count_reducer.counter,
    }
  }

const mapActionsToProps = (dispatch) => {
    return {
        rdxAdd: () => dispatch(add()),
        rdxSubstract: () => dispatch(substract()),
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Counter);