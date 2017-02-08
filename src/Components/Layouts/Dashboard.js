import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';

import Footer from './Shared/Footer';

class Dashboard extends React.Component {
    render() {
        return (
                <div>
                    <Navbar toggleable color="skyblue" light >
                        <NavbarBrand href="/">Dashboard</NavbarBrand>
                        <Collapse isOpen={ true } navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem><NavLink href="/page">Audience</NavLink></NavItem>
                                <NavItem><NavLink href="/page2">Engagement</NavLink></NavItem>
                                <NavItem><NavLink href="/page3">Schedule</NavLink></NavItem>
                                <NavItem><NavLink href="/page4">Bot-hunter</NavLink></NavItem>
                            </Nav>
                            <Nav navbar>
                                <NavItem><NavLink href="/page">Profile</NavLink></NavItem>
                                <NavItem><NavLink href="/page2">Logout</NavLink></NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
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

                    <Footer/>
                </div>
        );
    }
}

export default Dashboard;