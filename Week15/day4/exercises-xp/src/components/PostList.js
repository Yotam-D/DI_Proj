import React, { Component } from 'react';
import data from '../data.json'

class PostList extends Component {
    render() {
        return (
            <div>
                <h1>Hi This is a Title</h1>
                {
                    data.map((element,i) => {
                       return (
                        <div key = {i}>
                            <h1>{element.title}</h1>
                            <h2>{element.content}</h2>
                        </div>
                       )
                    })
                }
            </div>
        );
    }
}

export default PostList;