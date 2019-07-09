import React from 'react';
import { Nav } from 'react-bootstrap';
import Gears from './gears.svg';
import SVG from 'react-inlinesvg';
import './topnav.css'

import { BELIEFS_SECTION, ACTIONS_SECTION, EVIDENCE_SECTION, PREFERENCE_SECTION } from './redux/actions';

const TopNavigation = (props) => {
    return (
        <Nav variant='tabs' activeKey={props.section} onSelect={props.selectSection}>
            <Nav.Item>
                <Nav.Link eventKey={BELIEFS_SECTION}>Beliefs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled={props.currentStatement === -1} eventKey={EVIDENCE_SECTION}>Evidence</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled={props.currentStatement === -1} eventKey={ACTIONS_SECTION}>Actions</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link eventKey={PREFERENCE_SECTION}>
                    <div className='perf-gears'>
                        <SVG src={Gears} />
                    </div>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );

};

export default TopNavigation;