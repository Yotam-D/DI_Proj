import React, { Component } from 'react';
import {connect} from 'react-redux';

class Result extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Result: {this.props.text}</h2>
                <p>percentage: {this.props.percentage} %</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        text: state.Result_reducer.result.result,
        percentage: state.Result_reducer.result.percentage,
    }
}

export default connect(mapStateToProps)(Result);