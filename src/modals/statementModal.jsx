import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class AddStatement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limitingBelief: "",
            empoweringBelief: "",
        }

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
                            <Form.Text className='text-muted'>State your limiting belief (e.g. 'I never finish things.')</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='empoweringBelief'>
                            <Form.Label>Empowring Belief</Form.Label>
                            <Form.Control type='text' value={this.state.empoweringBelief} onChange={this.handleEmpoweringBeliefChanged} />
                            <Form.Text className='text-muted'>Restate your limiting belief as an empowering belief (e.g. 'I sometimes finish things')</Form.Text>
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
};


export default AddStatement;