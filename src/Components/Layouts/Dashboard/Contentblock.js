import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';

const Contentblock = () => (
    <Container fluid className="h-100">
        <Row className="justify-content-center mt-4">
            <Col sm="8">
                <h2>Dashboard</h2>
                <Alert color="success">
                    <strong>Well done!</strong> You successfully read this important alert message.
                </Alert>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Posts</th>
                        <th>Followers</th>
                        <th>Following</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">01.01.2017</th>
                        <td>454</td>
                        <td>220</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <th scope="row">02.01.2017</th>
                        <td>454</td>
                        <td>220</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <th scope="row">03.01.2017</th>
                        <td>454</td>
                        <td>220</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <th scope="row">04.01.2017</th>
                        <td>454</td>
                        <td>220</td>
                        <td>103</td>
                    </tr>
                    <tr>
                        <th scope="row">05.01.2017</th>
                        <td>454</td>
                        <td>220</td>
                        <td>103</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default Contentblock;