import {connect} from 'react-redux';

function MovieDetails(props){
    if(props.movie_details.title){
        return(
            <>
            <h2>Movie Details</h2>
            <div>title: {props.movie_details.title}</div>
            <div>releaseDate: {props.movie_details.releaseDate}</div>
            <div>rating: {props.movie_details.rating}</div>
            </>
        )
    } else {
        return (
            <>
                <h2>Movie Details</h2>
                <h4>Please Select A Movie</h4>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        movie_details : state.details,
    }
}

export default connect(mapStateToProps)(MovieDetails)