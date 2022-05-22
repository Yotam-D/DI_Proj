import React, { Component } from 'react';


class FirstName extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <label>First Name</label><br></br>
                <input name="firstInp" type = "text" placeholder="Enter First Name" onChange={this.props.handleFnc}/>
            </div>
        );
    }
}

export default FirstName;