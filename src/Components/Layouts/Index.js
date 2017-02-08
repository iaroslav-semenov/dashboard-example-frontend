import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Index</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Index;