import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import EditStatement from './redux/components/editStatement';

class Statements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inlineHelp: false
        }

        this.toggleInlineHelp = this.toggleInlineHelp.bind(this);
    }

    statements() {
        return this.props.statements.map((i, idx) => {
            if (idx !== this.props.currentStatement) {
                return (
                    <ListGroup.Item key={idx} onClick={e => this.props.selectStatement(idx)}>
                        {i.text}
                    </ListGroup.Item>
                );
            } else {
                return (<EditStatement index={idx} />);
            }
        });
    }

    toggleInlineHelp(event) {
        event.preventDefault();
        this.setState({
            inlineHelp: !this.state.inlineHelp
        })
    }

    helpBanner() {
        if (this.props.preferences.showHelp) {
            return (
                <Row className='text-muted small'>
                    <Col>
                        <div>
                            Are you new to the app?  Here's some 
                            some <a href='/help.html' target='_other' onClick={this.toggleInlineHelp}>help</a> to 
                            get you started.
                        </div>
                    </Col>
                </Row>
            )
        }
        return '';
    }

    inlineHelp() {
        if (this.state.inlineHelp) {
            return (
                <Row>
                    <Col>
                        <h3>About</h3>
                        <p>
                            We all have things we say to ourselves that we think
                            are true, aren't the whole truth, and can be changed.
                            For example, believing that I'm not good at something 
                            (like socializing) can
                            limit my ability to improve or even attempt it
                            (like staying a wall-flower).  This
                            app is an attempt to change what you tell yourself.
                        </p>
                        <h3>Beliefs</h3>
                        <p>
                            First, start by stating the belief.  For example, I start
                            a lot of projects but I don't complete many of the projects.
                            I sometimes say to myself 'I never finish anything'.  Another
                            example is 'I am not good in social situations.'  This is 
                            the self-limiting belief.
                            Once I've identified that belief, I can now restate it.
                        </p>
                        <p>
                            I can remove words like 'always' and 'never' and acknowledge
                            I have finished projects in the past.  The sentence now reads
                            something like 'I sometimes finish things'.  Or, I can 
                            restate the phrase by acknowledging my ability to change.
                            For example, 'I can learn to relax and enjoy social 
                            situations.'  This is now your empowering belief.
                        </p>
                        <h3>Evidence</h3>
                        <p>
                            For me, I find it helpful to identify where the empowering 
                            belief was true.  I think of situations where I completed 
                            something, or a social situation where I was comfortable and
                            relaxed.  Documenting a few of these helps reinforce and 
                            strengthen the memories that support the empowering belief.
                        </p>
                        <h3>Actions</h3>
                        <p>
                            Sometimes it helps to take an action to build evidence or
                            strengthen the empowering belief.  For example, working on 
                            this application is helping me reinforce the idea that I do
                            complete projects.  Reading 'How To Win Friends and Influence
                            People' is how I'm helping myself to handle social situations.
                        </p>
                        <p>
                            I've read in several places that actions or goals should be
                            simple to understand, easy to measure, achievable, relevant to the
                            problem, and time limited.  These are S.M.A.R.T goals or actions.
                        </p>
                        <ul>
                            <li>
                                <b>Simple</b> - study how to improve my social skills by reading 
                                'How to Win Friends and Influence People'.
                            </li>
                            <li>
                                <b>Measureable</b> - I know when I've finished reading a book.
                            </li>
                            <li>
                                <b>Achievable</b> - I've read books in the past.  
                            </li>
                            <li>
                                <b>Relevant</b> - Many people have indicated that this books has 
                                helped them become more adroit in social settings.
                            </li>
                            <li>
                                <b>Time limited</b> - I gave myself an ample two weeks.
                            </li>
                        </ul>
                        <p>
                            Examples of things to avoid are 'I should exercise more' or
                            'overcome my adiction to social media.'  We could restate the
                            former as: For the next two weeks I will walk for 15 minutes 
                            during my lunch break.  We could restate the latter as: 
                            Tonight, I will turn off my phone and computer at 9:00 pm
                            and not turn them on again until I leave for work in the morning.
                        </p>
                        <div>
                            <Button onClick={this.toggleInlineHelp}>Close Help</Button>
                        </div>
                    </Col>
                </Row>
            )
        }
        return '';
    }

    helpText() {
        if (this.props.preferences.showHelp) {
            return [
                "Create a statement to build an empowering belief or select",
                "an existing statement.  Then add evidence to reinforce that",
                "belief and actions you can take to build that belief."
            ].join(" ");
        }
        return "Create a statement to build an empowering belief."
    }

    render() {
        return (
            <Container>
                {this.helpBanner()}
                {this.inlineHelp()}
                <Row>
                    <Col>
                        <h3>Beliefs</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='small'>{this.helpText()}</Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.statements()}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Statements;