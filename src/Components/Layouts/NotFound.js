import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

import Footer from './Shared/Footer';


class Index extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>404: Not Found</h1>
                            <p>You seem to be lost, buddy.</p>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Index;