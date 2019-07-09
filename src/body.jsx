import React from 'react';
import Statements from './redux/components/statements';
import Actions from './redux/components/actions';
import Evidence from './redux/components/evidence';
import Preferences from './preferences';

import { BELIEFS_SECTION, EVIDENCE_SECTION, ACTIONS_SECTION, PREFERENCE_SECTION } from './redux/actions';

const body = (props) => {
    switch(props.section) {
        case BELIEFS_SECTION:
            return (<Statements />);
        case EVIDENCE_SECTION:
            return (<Evidence />);
        case ACTIONS_SECTION:
            return (<Actions />);
        case PREFERENCE_SECTION:
            return (<Preferences />);
        default:
            return (<Statements />);
    }
}

export default body;