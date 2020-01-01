import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    //takes user back to movie list
    backToList = () => {
        this.props.history.push('/');
    }

    //takes user to edit page
    editPage = (event, id) => {
        this.props.history.push('/edit');
    }

    render(){
        return(
            <div>
                <button onClick={this.backToList}>Back to List</button>
                <button onClick={(event) => this.editPage(event, this.props.details[0])}>Edit</button>
                {this.props.details.map((details, i)=>{
                    return (
                        <div key={i}>
                            <h2>{details.title}</h2>
                            <p>{details.description}</p>
                        </div>
                    )
                })}
                <h2>Genres</h2>
                <ul>
                    {this.props.genres.map((genres, i)=>{
                        return <li key={i}>{genres.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(reduxState=>(
    {details: reduxState.details,
    genres: reduxState.genres}
    ))(Details);