import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const FREQUENTLY = 'frequently';
const INFREQUENTLY = 'infrequently';
const ONCE = 'once';

class AddAction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action: "",
            frequency: INFREQUENTLY
        };

        this.handleActionChanged = this.handleActionChanged.bind(this);
        this.clearState = this.clearState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeFrequency = this.changeFrequency.bind(this);
    };

    handleActionChanged(event) {
        this.setState({
            action: event.target.value
        });
    };

    clearState() {
        this.setState({
            action: "",
            frequency: INFREQUENTLY
        });
    };

    handleClick() {
        this.props.onClickAdd(this.props.statementIndex, {
            text:this.state.action,
            frequency:this.state.frequency
        });
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

    frequencyHelp() {
        if (this.props.preferences.showHelp) {
            return [
                "How often do you want to take this action?",
                "It might be something you want to do every day or almost every day.",
                "Or maybe it's something you'd like to do for yourself once in a while.",
                "It could also be something you do just once and then you can move on"
            ].join(' ');
        }
        return 'How frequently do you want to take this action?'
    }

    changeFrequency(frequency) {
        this.setState({
            frequency
        });
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
                        <Form.Group controlId='frequency'>
                            <Form.Check type='radio' id='frequently' name='frequency' label='I want to do this regularly' checked={this.state.frequency === FREQUENTLY} onClick={() => this.changeFrequency(FREQUENTLY)}/>
                            <Form.Check type='radio' id='infrequently' name='frequency' label='I want to do this once in a while' checked={this.state.frequency === INFREQUENTLY} onClick={()=> this.changeFrequency(INFREQUENTLY)}/>
                            <Form.Check type='radio' id='once' name='frequency' label='I just want to do this once' checked={this.state.frequency === ONCE} onClick={() => this.changeFrequency(ONCE)} />
                            <Form.Text className='text-muted'>{this.frequencyHelp()}</Form.Text>
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

