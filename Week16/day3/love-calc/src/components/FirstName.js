import React, { Component } from 'react';
import {connect} from 'react-redux';
import { changeFirst } from '../redux/action';


class FirstName extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <label>First Name</label><br></br>
                {/* <input name="firstInp" type = "text" placeholder="Enter First Name" onChange={this.props.handleFnc}/> */}
                <input  type = "text" placeholder="Enter First Name" onChange={(e) => this.props.changeFname(e)}/>
            </div>
        );
    }
}

const mapActionsToProps = (dispatch) => {
    return{
        changeFname: (e) => dispatch(changeFirst(e.target.value)),
    }
}

export default connect(null,mapActionsToProps)(FirstName);