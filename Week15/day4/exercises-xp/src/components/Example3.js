import React, { Component } from 'react';
import complexData from '../complexData.json';

class Example3 extends Component {
    render() {
        return (
            <div>
                {
                complexData.Experiences.map((company,index) => {
                    let {logo, companyName,  url, roles} = company
                    let {title, startDate,location,description} = roles[0]
                    return(
                        <div key = {index}>
                            <img src = {logo} ></img><br></br>
                            <a href={url}>{companyName}</a>
                            <h4>{title}</h4>
                            <p>{startDate} {location}</p>
                            <p>{description}</p>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Example3;