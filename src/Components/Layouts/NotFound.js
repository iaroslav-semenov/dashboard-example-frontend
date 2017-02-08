import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>404: Not Found</h1>
                        <p>You seem to be lost, buddy.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Index;