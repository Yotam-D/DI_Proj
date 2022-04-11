import React from "react";

class Events extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true,
        }
    }
    clickMe(e){
        alert('I was Clicked');
    }
    handleKeyPress(e){
        if(e.code == 'Enter'){
            alert(`The ENTER Key wass pressed with the value: ${e.target.value}  `)
        }
    }
    handleToggleButton = () => {
        this.setState((state) => {
            console.log(state);
            return {isToggleOn: !state.isToggleOn}
        })
    }


    render(){
        return(
            <>
            <h2>Ex2</h2>
            <p>Part I</p>
            <button onClick={this.clickMe} >Click here</button>
            <br></br>
            <p>part II</p>
            <input type="text" placeholder="Press the ENTER Key!" onKeyPress={this.handleKeyPress}/>
            <br></br>
            <p>Part III</p>
            <button onClick={this.handleToggleButton}>{this.state.isToggleOn?'ON':'OFF'}</button>
            </>
        )
    }
}

export default Events;