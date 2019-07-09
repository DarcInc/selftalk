import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import EditStatement from './redux/components/editStatement';

const statements = (props) => {
    let statements = props.statements.map((i, idx) => {
        if (idx !== props.currentStatement) {
            return (
                <ListGroup.Item key={idx} onClick={e => props.selectStatement(idx) }>
                    {i.text}
                </ListGroup.Item>
            );
        } else {
            return (<EditStatement index={idx} />);
        }
    });

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Beliefs</h3>
                </Col>
            </Row>
            <Row>
                <Col className='small'>
                    Create a statement to build an empowering belief or select
                    an existing statement.  Then add evidence to reinforce that
                    belief and actions you can take to build that belief.
                    </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {statements}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default statements;