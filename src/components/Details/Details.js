import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
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