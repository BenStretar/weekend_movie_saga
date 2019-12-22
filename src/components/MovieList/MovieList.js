import React, {Component} from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    render(){
        return(
            <div className="movieCard">
                <h1>title</h1>
                <p>description</p>
            </div>
        )
    }
}

export default connect()(MovieList);