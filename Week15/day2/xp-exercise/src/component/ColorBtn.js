import React, { Component } from "react";
import Child from './Child';

class ColorBtn extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      prevColor: null,
      show:true,
    };
  }

  handleClick = () => {
    this.setState({
      color: "pink",
    });
  };

  handleDeleteClick = () => {
    this.setState({show:false})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 5000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevPerops, prevState){
    return prevState.color;
  }

  componentDidUpdate(prevPerops, prevState, snapshot){
    if (this.state.color !== snapshot){
        this.setState({prevColor:snapshot})
    }
  }

  render() {
    return (
        <>
            <button onClick={this.handleClick}>
                My Favortie Color is {this.state.color}
            </button>
            <div>
            {this.state.prevColor && 
             <h3>the previous color was {this.state.prevColor} </h3>
            }
            </div>
            { this.state.show &&
              <div>
                <Child />
                <button onClick ={this.handleDeleteClick}> delete child </button>
              </div>
            }
        </>
    );
  }
}

export default ColorBtn;
