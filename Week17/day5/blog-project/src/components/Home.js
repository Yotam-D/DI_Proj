import BlogLogo from '../blog.png';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        if (this.props.posts_home == 0) {
            return (<div className= 'header center'><h3>No Posts To Show</h3></div>)
        } else {
            return (
                <div className='container home'>
                    {
                    this.props.posts_home.map((item,i) => {
                        return(
                            <div key={i} className='post card'>
                                <img src={BlogLogo} alt="Blog_Logo"/>
                                <div className='card-content'>
                                    <Link to={"/posts/"+item.id}><span className="card-title red-text">{item.title}</span></Link>
                                </div>
                                <p>{item.body}</p>
                            </div> 
                        )
                    })
                    }
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return{
        posts_home: state.posts,
    }
}


export default connect(mapStateToProps,null)(Home);