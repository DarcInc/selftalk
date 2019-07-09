import React from 'react';
import { Form, Button, ButtonGroup, Row, Col, ListGroup } from 'react-bootstrap';

class StatementEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            newStatement: props.statement.text
        };

        this.handleUpdateStatementText = this.handleUpdateStatementText.bind(this);
        this.handleUpdateButton = this.handleUpdateButton.bind(this);
    }

    handleUpdateStatementText(event) {
        this.setState({
            newStatement: event.target.value
        });
    };

    handleUpdateButton() {
        if (this.state.editing) {
            this.props.handleUpdate(this.props.index, this.state.newStatement);
        }

        this.setState({
            editing: !this.state.editing
        });
    }

    render() {
        return (
            <ListGroup.Item className='bg-dark' key={this.props.index} active={true}>
                <Row hidden={this.state.editing}>
                    <Col><b>{this.state.newStatement}</b></Col>
                </Row>
                <Row hidden={!this.state.editing}>
                    <Col>
                        <Form>
                            <Form.Group controlId='newStatement'>
                                <Form.Control as='textarea' type='text' value={this.state.newStatement} onChange={this.handleUpdateStatementText}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup>
                            <Button variant='secondary' onClick={this.handleUpdateButton}>{this.state.editing ? 'Save' : 'Update'}</Button>
                            <Button variant='danger' onClick={e => this.props.handleDelete(this.props.index)}>Remove</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
};

export default StatementEditor;