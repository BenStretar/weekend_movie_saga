import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Pick a Movie!</p>
        <Router>
          <Route exact path='/' component={MovieList}/>
          <Route path='/details' component={Details} />
          <Route path='/edit' component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default App;
