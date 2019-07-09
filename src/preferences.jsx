import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const preferences = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Preferences</h3>
                </Col>
            </Row>
            <Row className='small'>
                <Col>
                    <div>
                        Set your preferences and back up your data.
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default preferences;