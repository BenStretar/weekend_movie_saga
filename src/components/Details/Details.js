import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    //takes user back to movie list
    backToList = () => {
        this.props.history.push('/');
    }

    //takes user to edit page
    editPage = () => {
        this.props.history.push('/edit');
    }

    render(){
        return(
            <div>
                <button onClick={this.backToList}>Back to List</button>
                <button onClick={this.editPage}>Edit</button>
            </div>
        )
    }
}

export default Details;