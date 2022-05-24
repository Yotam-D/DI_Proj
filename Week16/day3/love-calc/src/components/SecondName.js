import React, { Component } from 'react';
import {connect} from 'react-redux';
import { changeSecond } from '../redux/action';

class SecondName extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <label>Second Name</label><br></br>
                <input type = "text" placeholder="Enter Second Name" onChange={(e) => this.props.changeSname(e)}/>
            </div>
        );
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        changeSname : (e) => dispatch(changeSecond(e.target.value))
    }
}

export default connect(null,mapActionsToProps)(SecondName);