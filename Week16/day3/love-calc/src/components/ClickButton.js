import React, { Component } from 'react';

class ClickButton extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleClk}> click </button>
            </div>
        );
    }
}

export default ClickButton;