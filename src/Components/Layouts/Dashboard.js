import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class Dashboard extends React.Component {
    render() {
        return (
            <Container fluid>

                <Navbar color="faded" light>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                </Navbar>

                <Row>
                    <Col sm="4">
                        <Nav>
                            <NavItem>
                                <NavLink href="/page">Page 1</NavLink>
                                <NavLink href="/page2">Page 2</NavLink>
                                <NavLink href="/page3">Page 3</NavLink>
                                <NavLink href="/page4">Page 4</NavLink>
                                <NavLink href="/page5">Page 5</NavLink>
                            </NavItem>
                        </Nav>
                        <Row>
                            <Col>
                                <p>Menu bar</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="auto">
                        <h1>Dashboard</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;