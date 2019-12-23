import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieItem extends Component {
    render(){
        const title = this.props.item.title;
        const poster = this.props.item.poster;
        const description = this.props.item.description;
        return(       
            <>
                <h2>{title}</h2>
                <div>
                    <img src={poster} onClick={this.handlePosterClick} />
                    <p>{description}</p>
                </div>
            </>
        )
    }
}

export default withRouter(connect()(MovieItem));