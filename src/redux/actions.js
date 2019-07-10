export const ADD_STATEMENT = 'ADD_STATEMENT';
export const REMOVE_STATEMENT = 'REMOVE_STATEMENT';
export const SELECT_STATEMENT = 'SELECT_STATEMENT';
export const UPDATE_STATEMENT = 'UPDATE_STATEMENT';

export const ADD_EVIDENCE = 'ADD_EVIDENCE';
export const UPDATE_EVIDENCE = 'UPDATE_EVIDENCE';
export const REMOVE_EVIDENCE = 'REMOVE_EVIDENCE';

export const ADD_ACTION = 'ADD_ACTION';
export const UPDATE_ACTION = 'UPDATE_ACTION';
export const REMOVE_ACTION = 'REMOVE_ACTION';

export const CHANGE_SECTION = 'CHANGE_SECTION';
export const BELIEFS_SECTION = 'BELIEFS';
export const EVIDENCE_SECTION = 'EVIDENCE';
export const ACTIONS_SECTION = 'ACTIONS';
export const PREFERENCE_SECTION = 'PREFERENCE';

export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';

export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES';
export const LOAD_INITIAL_PREFERENCES = 'LOAD_INITIAL_PREFERENCES';

export const addStatement = (empoweringText) => {
    return {
        type: ADD_STATEMENT,
        data: {
            statement: empoweringText
        }
    }
}

export const removeStatement = (index) => {
    return {
        type: REMOVE_STATEMENT,
        data: {
            removeIndex: index
        }
    }
}

export const selectStatement = (index) => {
    return {
        type: SELECT_STATEMENT,
        data: {
            selectedIndex: index
        }
    }
}

export const addEvidence = (statementIndex, evidenceText) => {
    return {
        type: ADD_EVIDENCE,
        data: {
            statementIndex,
            evidence: evidenceText
        }
    }
}

export const addAction = (statementIndex, actionText) => {
    return {
        type: ADD_ACTION,
        data: {
            statementIndex,
            action: actionText
        }
    }
}

export const changeSection = (section) => {
    return {
        type: CHANGE_SECTION,
        data: {
            section
        }
    }
}

export const loadInitialData = (statements) => {
    return {
        type: LOAD_INITIAL_DATA,
        data: {
            statements
        }
    }
}

export const updateStatement = (statementIndex, text) => {
    return {
        type: UPDATE_STATEMENT,
        data: {
            statementIndex,
            text
        }
    }
}

export const updateEvidence = (statementIndex, evidenceIndex, text) => {
    return {
        type: UPDATE_EVIDENCE,
        data: {
            statementIndex,
            evidenceIndex,
            text
        }
    }
}

export const removeEvidence = (statementIndex, evidenceIndex) => {
    return {
        type: REMOVE_EVIDENCE,
        data: {
            statementIndex,
            evidenceIndex
        }
    }
}

export const updateAction = (statementIndex, actionIndex, text) => {
    return {
        type: UPDATE_ACTION,
        data: {
            statementIndex,
            actionIndex, 
            text
        }
    }
}

export const removeAction = (statementIndex, actionIndex) => {
    return {
        type: REMOVE_ACTION,
        data: {
            statementIndex,
            actionIndex
        }
    }
}

export const updatePreferences = (preferences) => {
    return {
        type: UPDATE_PREFERENCES,
        data: {
            preferences
        }
    }
}

export const loadInitialPreferences = (preferences) => {
    return {
        type: LOAD_INITIAL_PREFERENCES,
        data: {
            preferences
        }
    }
}