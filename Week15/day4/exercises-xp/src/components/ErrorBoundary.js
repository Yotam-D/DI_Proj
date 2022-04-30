import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError : false,
            error: null,
            info: null,
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
            error: error,
            info: info,
        })
    }

    render() {
        return this.state.hasError ? <div> {this.state.error.toString()} </div> :
        <div> {this.props.children} </div> 
    }
}

export default ErrorBoundary;