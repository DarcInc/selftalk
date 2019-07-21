import React from 'react';
import { Container, Row, Col, ListGroup, Form, ButtonGroup, Button } from 'react-bootstrap';

const FREQUENTLY = 'frequently';
const INFREQUENTLY = 'infrequently';
const ONCE = 'once';

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updating: false,
            selected: -1,
            newAction: '',
            newFrequency: 'once'
        };

        this.handleSelectAction = this.handleSelectAction.bind(this);
        this.handleUpdateAction = this.handleUpdateAction.bind(this);
        this.handleUpdateFrequency = this.handleUpdateFrequency.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSelectAction(index) {
        this.setState({
            selected: index,
            newAction: this.props.statement.actions[index].text,
            newFrequency: this.props.statement.actions[index].frequency,
            updating: false
        });
    }

    handleUpdateAction(event) {
        this.setState({
            newAction: event.target.value
        });
    }

    handleUpdate() {
        if (this.state.updating) {
            let update = {
                text: this.state.newAction,
                frequency: this.state.newFrequency
            };

            this.props.update(this.props.statementIndex, this.state.selected, update);
        }

        this.setState({
            updating: !this.state.updating
        });
    }

    handleRemove() {
        this.props.remove(this.props.statementIndex, this.state.selected);
        
        this.setState({
            selected: -1
        });
    }

    showFrequency(item) {
        switch(item.frequency) {
            case ONCE:
                return (<Row><Col>Once</Col></Row>)
            case INFREQUENTLY:
                return (<Row><Col>Infrequently</Col></Row>)
            case FREQUENTLY:
                return (<Row><Col>Frequently</Col></Row>)
        }
    }

    handleUpdateFrequency(newFrequency) {
        this.setState({
            newFrequency: newFrequency
        });
    }

    printFrequency(frequency) {
        switch(frequency) {
            case ONCE:
                return 'Once';
            case INFREQUENTLY:
                return 'Infrequently';
            case FREQUENTLY:
                return 'Frequently'
        }
    }

    render() {
        let actions = this.props.statement.actions.map((i, idx) => {
            if (idx === this.state.selected) {
                return (<ListGroup.Item className='bg-dark' key={idx} active={true}>
                    <Row hidden={this.state.updating}>
                        <Col>
                            <Row>
                                <Col><b>{i.text}</b></Col>
                            </Row>
                            <Row>
                                <Col>{this.printFrequency(i.frequency)}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row hidden={!this.state.updating}>
                        <Col>
                            <Form.Group controlId='action'>
                                <Form.Control as='textarea' value={this.state.newAction} onChange={this.handleUpdateAction} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type='radio' id='frequency' name='once' checked={this.state.newFrequency === ONCE} label='I want to do this once.' onClick={e => this.handleUpdateFrequency(ONCE)} />
                                <Form.Check type='radio' id='frequency' name='infrequently' checked={this.state.newFrequency === INFREQUENTLY} label='I want to do this once in a while.' onClick={e => this.handleUpdateFrequency(INFREQUENTLY)} />
                                <Form.Check type='radio' id='frequency' name='frequently' checked={this.state.newFrequency === FREQUENTLY} label='I want to do this often.' onClick={e => this.handleUpdateFrequency(FREQUENTLY)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonGroup>
                                <Button variant='secondary' onClick={this.handleUpdate}>{this.state.updating ? 'Save' : 'Update'}</Button>
                                <Button variant='danger' onClick={this.handleRemove}>Remove</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </ListGroup.Item>)
            } 
            return (
                <ListGroup.Item onClick={e => this.handleSelectAction(idx)} key={idx}>
                    <Row>
                        <Col>{i.text}</Col>
                    </Row>
                    <Row>
                        <Col>{this.printFrequency(i.frequency)}</Col>
                    </Row>
                </ListGroup.Item>)
        });
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Actions</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.statement.text}
                    </Col>
                </Row>
                <Row className='small'>
                    <Col>
                        <div>
                            These are actions you can take today to afirm
                            your belief.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {actions}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )

    }
};

export default Actions;