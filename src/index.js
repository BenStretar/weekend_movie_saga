import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMoviesSaga);
    yield takeEvery('GET_GENRES', getGenresSaga);
    yield takeEvery('GET_DETAILS', getDetailsSaga);
    yield takeEvery('EDIT_DETAILS', editDetails);
}

function* editDetails(action){
    let id = action.payload.id
    try{
        //const getResponse = 
        yield axios.put(`/movie/${id}`) // changed to put from get
        //yield put({type: 'EDIT_DETAILS', payload: getResponse.data})
    }
    catch(error){
        console.log('error editing movie details', error)
    }
}

function* getMoviesSaga(action){
    try{
        const getResponse = yield axios.get('/movie');
        yield put({type: 'SET_MOVIES', payload: getResponse.data})
    }
    catch(error){
        console.log('error getting movies', error);
    }
}

function* getDetailsSaga(action){
    try{
        const getResponse = yield axios.get(`/movie/${action.payload.id}`)
        yield put({type: 'SET_DETAILS', payload: getResponse.data}) // changed from GET
    }
    catch(error){
        console.log('error getting details', error);
    }
}

// gets the movies genres from the server 
function* getGenresSaga(action){
    try{
        const getResponse = yield axios.get(`/genre/${action.payload.id}`)
        yield put ({type: 'SET_GENRES', payload: getResponse.data}) // changed from GET
    }
    catch(error){
        console.log('error getting genres', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
