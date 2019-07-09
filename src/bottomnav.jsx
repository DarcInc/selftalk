import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import AddStatement from './redux/components/statementModal';
import AddEvidence from './redux/components/evidenceModal';
import AddActions from './redux/components/actionsModal';
import { BELIEFS_SECTION, ACTIONS_SECTION, EVIDENCE_SECTION, PREFERENCE_SECTION } from './redux/actions';

class BottomNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialog: false
        };

        this.showDialog = this.showDialog.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    showDialog() {
        this.setState({dialog: true});
    };

    handleCancel() {
        this.setState({
            dialog: false
        });
    };

    handleClose() {
        this.setState({
            dialog: false
        });
    };

    render() {
        let dialog = (<></>);
        switch(this.props.section) {
            case ACTIONS_SECTION:
                dialog = (<AddActions dialog={this.state.dialog} cancel={this.handleCancel} close={this.handleClose} />)
                break;
            case BELIEFS_SECTION:
                dialog = (<AddStatement dialog={this.state.dialog} cancel={this.handleCancel} close={this.handleClose} />)
                break;
            case EVIDENCE_SECTION:
                dialog = (<AddEvidence dialog={this.state.dialog} cancel={this.handleCancel} close={this.handleClose} />)
                break;
            default:
                dialog = (<></>)
        }

        return (
            <Navbar bg='dark' variant='dark' fixed='bottom'>
                <Nav className='mr-auto'></Nav>
                <Button disabled={this.props.section === PREFERENCE_SECTION} onClick={this.showDialog}>Add New</Button>
                {dialog}
            </Navbar>
        )
    }
}

export default BottomNavigation;