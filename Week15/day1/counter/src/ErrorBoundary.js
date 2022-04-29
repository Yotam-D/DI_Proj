import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({error:error, errorInfo:errorInfo,})
    }
    render() {
        console.log(this.state.error, this.state.errorInfo);
        return (
            this.props.children
            // <div>
                
            // </div>
        );
    }
}

export default ErrorBoundary;