import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


class Preferences extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHelp: props.preferences.showHelp
        };

        this.toggleHelp = this.toggleHelp.bind(this);
    }

    toggleHelp() {
        this.props.update({
            showHelp: !this.props.preferences.showHelp
        });
    }

    render() {
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
                <Row>
                    <Col>
                        <Form>
                            <Form.Check type='checkbox' id='helpCheckbox' checked={this.props.preferences.showHelp} onClick={this.toggleHelp} label='Display help'/>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Preferences;