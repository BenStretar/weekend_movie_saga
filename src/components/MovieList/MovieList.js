import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MovieList extends Component {
    componentDidMount(){
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    toDetails = (event, id) => {
        this.props.dispatch({type: 'GET_DETAILS', payload: {id: id}})
        this.props.dispatch({type: 'GET_GENRES', payload: {id: id}})
    }

    render(){
        return(
            <div>
                {this.props.movies.map((movies, i) =>{
                    return (
                        <div key={i}>
                            <h2>{movies.title}</h2>
                            <Link to='/details'>
                            <img onClick={(event) => this.toDetails(event, movies.id)} 
                            alt={movies.title} src={movies.poster} /> </Link>

                            <h3>Movie Description</h3>
                            <p>{movies.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapReduxStateProps = ( reduxStore ) => ({
    movies: reduxStore.movies
})

export default connect(mapReduxStateProps)(MovieList);