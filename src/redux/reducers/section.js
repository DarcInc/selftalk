import {CHANGE_SECTION, BELIEFS_SECTION} from '../actions';

const initialState = BELIEFS_SECTION;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SECTION:
            return action.data.section;
        default:
            return state;
    }
};

export default reducer;