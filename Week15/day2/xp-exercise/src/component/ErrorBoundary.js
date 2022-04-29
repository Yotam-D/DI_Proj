import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            error:'',
            errorInfo:'',
        }
    }
    componentDidCatch(error, errorInfo){
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        })
    }
    render() {
        if (this.state.hasError) {
        console.log(typeof this.state.hasError);
        return (
            <div>
                Error happened : {this.state.error.toString()}
            </div>
        )
        } else{
            return (
                this.props.children
            );
        }
    }
}

export default ErrorBoundary;