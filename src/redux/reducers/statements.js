import {ADD_STATEMENT, REMOVE_STATEMENT, UPDATE_STATEMENT, ADD_EVIDENCE, ADD_ACTION,
    LOAD_INITIAL_DATA, 
    UPDATE_EVIDENCE, REMOVE_EVIDENCE, UPDATE_ACTION, REMOVE_ACTION } from '../actions';

const initialState = [];

const createStatement = (statementText) => {
    return {
        text: statementText,
        evidence: [],
        actions: []
    };
};

const removeStatement = (state, index) => {
    return [...state.slice(0, index), ...state.slice(index + 1)];
};

const addEvidence = (statement, evidence) => {
    return Object.assign({}, statement, {evidence: [...statement.evidence, evidence]});
};

const addAction = (statement, action) => {
    return Object.assign({}, statement, {actions: [...statement.actions, action]});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_ACTION:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    let newActions = [...i.actions.slice(0, action.data.actionIndex), ...i.actions.slice(action.data.actionIndex + 1)];
                    return Object.assign({}, i, {actions: newActions});
                }
                return i;
            });
        case UPDATE_ACTION:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    let newActions = i.actions.map((a, aIndex) => action.data.actionIndex === aIndex ? action.data.text : a);
                    return Object.assign({}, i, {actions: newActions})
                }
                return i;
            });
        case REMOVE_EVIDENCE:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    let newEvidence = [...i.evidence.slice(0, action.data.evidenceIndex), ...i.evidence.slice(action.data.evidenceIndex + 1)];
                    return Object.assign({}, i, {evidence: newEvidence});
                }
                return i;
            });
        case UPDATE_EVIDENCE:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    let newEvidence = i.evidence.map((e, eIndex) => action.data.evidenceIndex === eIndex ? action.data.text : e);
                    return Object.assign({}, i, {evidence: newEvidence})
                }
                return i;
            });
        case UPDATE_STATEMENT:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    return Object.assign({}, i, {text: action.data.text});
                }
                return i;
            });
        case LOAD_INITIAL_DATA:
            return [...action.data.statements];
        case ADD_ACTION:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    return addAction(i, action.data.action);
                } 
                return i;
            });
        case ADD_EVIDENCE:
            return state.map((i, idx) => {
                if (idx === action.data.statementIndex) {
                    return addEvidence(i, action.data.evidence);
                }
                return i;
            });
        case REMOVE_STATEMENT:
            return removeStatement(state, action.data.removeIndex);
        case ADD_STATEMENT:
            return [...state, createStatement(action.data.statement)];
        default:
            return state;
    }
};

export default reducer;