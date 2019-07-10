import {UPDATE_PREFERENCES, LOAD_INITIAL_PREFERENCES} from '../actions';

const initialState = {showHelp: true};

const preferences = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_INITIAL_PREFERENCES:
            return action.data.preferences;
        case UPDATE_PREFERENCES:
            return action.data.preferences;
        default:
            return state;
    }
};

export default preferences;