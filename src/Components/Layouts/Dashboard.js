import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Dashboard</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;