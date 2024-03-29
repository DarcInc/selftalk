import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux/reducers'
import _ from 'lodash';

import $ from 'jquery';
import popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ADD_STATEMENT, ADD_ACTION, ADD_EVIDENCE, REMOVE_STATEMENT, loadInitialData, 
    UPDATE_STATEMENT, UPDATE_EVIDENCE, REMOVE_EVIDENCE, UPDATE_ACTION, REMOVE_ACTION, 
    UPDATE_PREFERENCES, ACTION_COMPLETE,
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
        case ACTION_COMPLETE:
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
    const parseDates = actionList => {
        return actionList.map(action => {
            if (action.completed) {
                return Object.assign({}, action, {completed: action.completed.map(date => new Date(date))});
            } else {
                return action;
            }
        })
    }
    
    let statements = JSON.parse(window.localStorage.getItem('statements'));
    statements = statements.map(statement => Object.assign({}, statement, {actions: parseDates(statement.actions)}));
    store.dispatch(loadInitialData(statements));
}

if (window.localStorage.getItem('preferences')) {
    let preferences = JSON.parse(window.localStorage.getItem('preferences'));
    store.dispatch(loadInitialPreferences(preferences));
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

