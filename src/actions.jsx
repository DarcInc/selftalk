import React from 'react';
import { Container, Row, Col, ListGroup, Form, ButtonGroup, Button } from 'react-bootstrap';

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updating: false,
            selected: -1,
            newAction: ''
        };

        this.handleSelectAction = this.handleSelectAction.bind(this);
        this.handleUpdateAction = this.handleUpdateAction.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSelectAction(index) {
        this.setState({
            selected: index,
            newAction: this.props.statement.actions[index]
        });
    }

    handleUpdateAction(event) {
        this.setState({
            newAction: event.target.value
        });
    }

    handleUpdate() {
        if (this.state.updating) {
            this.props.update(this.props.statementIndex, this.state.selected, this.state.newAction);
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

    render() {
        let actions = this.props.statement.actions.map((i, idx) => {
            if (idx === this.state.selected) {
                return (<ListGroup.Item className='bg-dark' key={idx} active={true}>
                    <Row hidden={this.state.updating}>
                        <Col><b>{i}</b></Col>
                    </Row>
                    <Row hidden={!this.state.updating}>
                        <Col>
                            <Form.Group controlId='action'>
                                <Form.Control as='textarea' value={this.state.newAction} onChange={this.handleUpdateAction} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonGroup>
                                <Button variant='secondary' onClick={this.handleUpdate}>Update</Button>
                                <Button variant='danger' onClick={this.handleRemove}>Remove</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </ListGroup.Item>)
            } 
            return (<ListGroup.Item onClick={e => this.handleSelectAction(idx)} key={idx}>{i}</ListGroup.Item>)
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