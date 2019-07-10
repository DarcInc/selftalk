import {combineReducers} from 'redux';

import statements from './statements';
import currentStatement from './currentStatement';
import section from './section';
import preferences from './preferences';


const reducer = combineReducers({
    statements,
    currentStatement,
    section,
    preferences
});

export default reducer;