import React, {Component} from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    render(){
        return(
            <div>
                <button onClick={this.cancelChange}>Cancel</button>
                <button onClick={this.saveChange}>Save</button>
                <input onChange={this.editTitle} />
                <input onChange={this.editDescription} />
            </div>
        )
    }
}

export default Edit;