import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleClick} from '../redux/action'

class ClickButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <button onClick={this.props.handleClk}> click </button>
            </div>
        );
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        handleClk : () => dispatch(handleClick()),
    }
}

export default connect(null, mapActionsToProps)(ClickButton);