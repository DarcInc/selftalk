import {combineReducers} from 'redux';

import statements from './statements';
import currentStatement from './currentStatement';
import section from './section';


const reducer = combineReducers({
    statements,
    currentStatement,
    section
});

export default reducer;