import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class AddAction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action: ""
        }

        this.handleActionChanged = this.handleActionChanged.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleActionChanged(event) {
        this.setState({
            action: event.target.value
        });
    };

    clearState() {
        this.setState({
            action: ""
        });
    };

    handleClick() {
        this.props.onClickAdd(this.props.statementIndex, this.state.action);
        this.props.close();
    }

    helpText() {
        if (this.props.preferences.showHelp) {
            return [
                "Specify an action you can take to help foster that belief.",
                "Try to make sure it's simple, you can easily measure success, easily achievable, and limit the",
                "amount of time you give yourself."
            ].join(' ');
        } 
        return "What can you do to reinforce your belief?"
    }

    render() {
        return (
            <Modal show={this.props.dialog} onExiting={this.clearState}>
                <Modal.Header>
                    <Modal.Title>Add Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='action'>
                            <Form.Label>Action</Form.Label>
                            <Form.Control as='textarea' value={this.state.action} onChange={this.handleActionChanged} />
                            <Form.Text className='text-muted'>{this.helpText()}</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.cancel}>Cancel</Button>
                    <Button variant='primary' onClick={this.handleClick}>Add</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default AddAction;

