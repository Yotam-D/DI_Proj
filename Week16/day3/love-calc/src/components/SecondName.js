import React, { Component } from 'react';


class SecondName extends Component {
    render() {
        return (
            <div>
                <label>Second Name</label><br></br>
                <input type = "text" placeholder="Enter Second Name" onChange={this.props.handleFnc}/>
            </div>
        );
    }
}

export default SecondName;