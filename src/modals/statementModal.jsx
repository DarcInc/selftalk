import React from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';

class AddStatement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limitingBelief: "",
            empoweringBelief: "",
        };

        this.handleEmpoweringBeliefChanged = this.handleEmpoweringBeliefChanged.bind(this);
        this.handleLimitingBeliefChanged = this.handleLimitingBeliefChanged.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleLimitingBeliefChanged(event) {
        this.setState({
            limitingBelief: event.target.value
        });
    };

    handleEmpoweringBeliefChanged(event) {
        this.setState({
            empoweringBelief: event.target.value
        });
    };

    clearState() {
        this.setState({
            limitingBelief: "",
            empoweringBelief: ""
        });
    };

    handleClick() {
        this.props.onClickAdd(this.state.empoweringBelief);
        this.props.close();
    }

    helpText() {
        if (this.props.preferences.showHelp) {
            return (
                <Form.Row className='text-muted small'>
                    <Col>
                        <div>Start by restating your limiting belief (e.g. 
                            "I never finish anything") as an empowering belief
                            (e.g. "I have finished projects").  Try inverting 
                            words like "can't" to "can", "always" or "never" to
                            words like "sometimes", and acknowledge your own 
                            ability to choose your outcome (e.g. "I sometimes 
                            choose to finish things").  
                        </div>
                    </Col>
                </Form.Row>
            )
        }
        return '';
    }

    render() {
        return (
            <Modal show={this.props.dialog} onExiting={this.clearState}>
                <Modal.Header>
                    <Modal.Title>Add Belief</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='limitingBelief'>
                            <Form.Label>Limiting Belief</Form.Label>
                            <Form.Control type='text' value={this.state.limitingBelief} onChange={this.handleLimitingBeliefChanged} />
                            <Form.Text className='text-muted'>State your limiting belief.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='empoweringBelief'>
                            <Form.Label>Empowring Belief</Form.Label>
                            <Form.Control as='textarea' type='text' value={this.state.empoweringBelief} onChange={this.handleEmpoweringBeliefChanged} />
                            <Form.Text className='text-muted'>Restate your limiting belief as an empowering belief.</Form.Text>
                        </Form.Group>
                        {this.helpText()}
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


export default AddStatement;