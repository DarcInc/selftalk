import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux/reducers'

import $ from 'jquery';
import popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ADD_STATEMENT, ADD_ACTION, ADD_EVIDENCE, REMOVE_STATEMENT, loadInitialData, 
    UPDATE_STATEMENT, UPDATE_EVIDENCE, REMOVE_EVIDENCE, UPDATE_ACTION, REMOVE_ACTION, 
    UPDATE_PREFERENCES, 
    loadInitialPreferences} from './redux/actions';

const saver = store => next => action => {
    next(action);
    switch (action.type) {
        case ADD_STATEMENT:
        case ADD_ACTION:
        case ADD_EVIDENCE:
        case REMOVE_STATEMENT:
        case UPDATE_STATEMENT:
        case UPDATE_EVIDENCE:
        case REMOVE_EVIDENCE:
        case UPDATE_ACTION:
        case REMOVE_ACTION:
            let statements = store.getState().statements;
            window.localStorage.setItem("statements", JSON.stringify(statements));
            break;
        case UPDATE_PREFERENCES:
            let preferences = store.getState().preferences;
            if (preferences) {
                window.localStorage.setItem('preferences', JSON.stringify(preferences));
            }
            break;
    }
};

let store = createStore(reducer, composeWithDevTools(
    applyMiddleware(saver)
));

if (window.localStorage.getItem('statements')) {
    let statements = JSON.parse(window.localStorage.getItem('statements'));
    store.dispatch(loadInitialData(statements));
}

if (window.localStorage.getItem('preferences')) {
    let preferences = JSON.parse(window.localStorage.getItem('preferences'));
    store.dispatch(loadInitialPreferences(preferences));
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

