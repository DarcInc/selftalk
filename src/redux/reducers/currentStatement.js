import { SELECT_STATEMENT, REMOVE_STATEMENT } from '../actions';

const initialState = -1;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_STATEMENT:
            return action.data.selectedIndex;
        case REMOVE_STATEMENT:
            return -1;
        default:
            return state;
    }
};

export default reducer;