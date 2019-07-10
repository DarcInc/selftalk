import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class AddEvidence extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            evidence: ""
        }

        this.handleEvidenceChanged = this.handleEvidenceChanged.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };


    handleEvidenceChanged(event) {
        this.setState({
            evidence: event.target.value
        });
    };


    clearState() {
        this.setState({
            evidence: ""
        });
    };

    handleClick() {
        this.props.onClickAdd(this.props.statementIndex, this.state.evidence);
        this.props.close();
    }

    helpText() {
        if (this.props.preferences.showHelp) {
            return [
                "Add evidence that supports your belief.  For example, ",
                "if you don't feel like you finish things, add examples of ",
                "when you finished something.  (e.g. Last summer I repainted",
                "the guest room)."
            ].join(' ');
        }
        return "Add evidence that supports your belief.";
    }

    render() {
        return (
            <Modal show={this.props.dialog} onExiting={this.clearState}>
                <Modal.Header>
                    <Modal.Title>Add Evidence</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='evidence'>
                            <Form.Label>Evidence</Form.Label>
                            <Form.Control type='text' as='textarea' value={this.state.evidence} onChange={this.handleEvidenceChanged} />
                            <Form.Text className='text-muted'>{this.helpText()}</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.cancel}>Cancel</Button>
                    <Button variant='primary' onClick={this.handleClick}>Add</Button>
                </Modal.Footer>
            </Modal>
        );
    };
}

export default AddEvidence;