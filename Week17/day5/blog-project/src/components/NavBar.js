import BlogLogo from '../blog.png'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class navBar extends Component {
    render() {
        return (
            // <div>
            //     <Link to="/">Home</Link>
            //     <Link to="/about">About</Link>
            //     <Link to="/contact">Contact</Link>
            // </div>
            <div>
                  <nav>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo"><img src={BlogLogo} alt="Blog_Logo" style={{height:'50px'}}></img></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default navBar;