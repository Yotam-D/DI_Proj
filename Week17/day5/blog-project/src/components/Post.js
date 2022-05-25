import blogLogo from '../blog.png';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { handleDelete } from '../redux/action';
import { Link } from "react-router-dom";

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            id: '' ,
        }
    }

    // find relevant post according to the url suffix, then set its title and body in the component state-
    componentDidMount(){
    let url = new URL(window.location);
    let current_ID = url.pathname.substring(url.pathname.indexOf('posts/')+6);
    let currentPost = this.props.all_posts.find(obj => obj.id == current_ID);
    this.setState({title: currentPost.title, body:currentPost.body, id:currentPost.id})
    }

    render() {
        return (
            <div>
                <h2 className="header center">{this.state.title}</h2>
                <p style={{fontSize:'30px'}}>{this.state.body}</p>
                <Link to = '/' >
                    <button onClick={() => this.props.handleClick(this.state.id)}> Delete post</button>
                </Link>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return{
        all_posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClick : (post_id) => dispatch(handleDelete(post_id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);