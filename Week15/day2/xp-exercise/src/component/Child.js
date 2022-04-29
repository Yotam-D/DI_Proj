import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        alert('the component Child is about to be unmounted')
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

export default Child;