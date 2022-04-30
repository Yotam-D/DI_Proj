import React, { Component } from "react";
import complexData from "../complexData.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Medias</h2>
        <ul>
          {complexData.SocialMedias.map((element, i) => <li key={i}>{element}</li>)}
        </ul>
      </div>
    )
  }
}

export default Example1;
