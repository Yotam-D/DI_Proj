import React, { Component } from 'react';
import complexData from '../complexData.json'

class Example2 extends Component {
    render() {
        // console.log(complexData.Skills);
        return (
            <div>
                {complexData.Skills.map((element,i) => {
                    return(
                        <div key = {i}>
                            <h3>{element.Area}</h3>
                            <ul>
                            {element.SkillSet.map((listElement,ind) =>{
                                return(
                                <li key= {ind}>
                                    {listElement.Name}
                                </li>
                                )
                            })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Example2;