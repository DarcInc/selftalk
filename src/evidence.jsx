import React from 'react';
import { Container, Row, Col, ListGroup, ButtonGroup, Button, Form } from 'react-bootstrap'


class Evidence extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: -1,
            newEvidence: "",
            updating: false
        }

        this.handleSelectEvidence = this.handleSelectEvidence.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdateEvidence = this.handleUpdateEvidence.bind(this);
    }

    handleSelectEvidence(index) {
        this.setState({
            selected: index,
            newEvidence: this.props.statement.evidence[index]
        });
    }

    handleUpdate() {
        if (this.state.updating) {
            this.props.update(this.props.statementIndex, this.state.selected, this.state.newEvidence);
        }

        this.setState({
            updating: !this.state.updating
        })
    }

    handleRemove() {
        this.props.remove(this.props.statementIndex, this.state.selected);
        this.setState({
            selected: -1
        });
    }

    handleUpdateEvidence(event) {
        this.setState({
            newEvidence: event.target.value
        });
    }

    render() {
        let evidence = this.props.statement.evidence.map((i, idx) => {
            if (idx === this.state.selected) {
                return (
                    <ListGroup.Item className='bg-dark' key={idx} active={idx === this.state.selected}>
                        <Row hidden={this.state.updating} >
                            <Col><b>{i}</b></Col>
                        </Row>
                        <Row hidden={!this.state.updating}>
                            <Col>
                                <Form.Group controlId='evidence'>
                                    <Form.Control as='textarea' value={this.state.newEvidence} onChange={this.handleUpdateEvidence} />
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
                    </ListGroup.Item>
                )
            } else {
                return (
                    <ListGroup.Item onClick={e => this.handleSelectEvidence(idx)} key={idx} active={false}>{i}</ListGroup.Item>
                )
            }
        });
            
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Evidence</h3>
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
                            Take some time to review these examples of when you acted in accordance
                            with your belief.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {evidence}
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        )
    }
};

export default Evidence;