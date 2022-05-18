import React, { Component } from 'react';
import {connect} from 'react-redux';
import { movieDetails } from '../redux/actions';

class MovieList extends Component {
    constructor(){
        super();
        this.state = {
        
        }
    }

    render() {
        return (
            <>
                <h2>Movies List</h2>
                {this.props.movies_arr.map((item,i) =>
                    {return(
                        <div key={i}>
                            <h3>{item.title}</h3>
                            <button onClick = {() => this.props.movieD(item)}>Details</button>
                        </div>
                        )
                    })
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
 return{
    movies_arr: state.movies,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        movieD: (obj) => dispatch(movieDetails(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);