import React, {Component} from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        id: this.props.details[0].id,
        title: '',
        description: ''
    }

    //cancel change and takes user back to details
    cancelChange = () => {
        this.props.history.push('/details');
    }

    handleChange = (event, propertyName) => {
        console.log(event.target.value)
        this.setState({
            [propertyName]: event.target.value
        })
    }

    editDetails = (event, id) => {
        this.props.dispatch({ type: 'EDIT_DETAILS', payload: this.state})
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: this.state.id}})
        this.props.history.push('/details')
    }

    

    render(){
        return(
            <div>
                <p>You are updating: {this.props.details[0].title}</p>
                <input type="text" lable="title" placeholder="Update Title" 
                onChange={(event) => this.handleChange(event, 'title')} />
                <input type="text" lable="description" placeholder="Update Description" 
                onChange={(event) => this.handleChange(event, 'description')} />

                <button onClick={this.cancelChange}>Cancel</button>
                <button onClick={this.editDetails}>Save</button>
            </div>
        )
    }
}

export default connect(reduxState=>(
    {details: reduxState.details}))(Edit);