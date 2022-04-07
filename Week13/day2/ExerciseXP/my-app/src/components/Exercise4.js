import React from "react";
import './Exercise4.css'

class Exercise4 extends React.Component{
    constructor(){
        super();
    }
    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return(
            <div>
                {/* <h1 style={{color:'red',background: 'lightblue'}}>helloooo EX4</h1> */}
                <h1 style={style_header}>helloooo EX4</h1>
                <p className="para">lorem ipsum</p>
                <a href="/nowhere">link to nowhere</a>
                <form>
                    <input type='text'></input>
                    <button>click!</button>
                </form>
                <img alt="imageHere"></img>
                <ol>
                    <li>first</li>
                    <li>second</li>
                </ol>

            </div>
        )
    }
}

export default Exercise4