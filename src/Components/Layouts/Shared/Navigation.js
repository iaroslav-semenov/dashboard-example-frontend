import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => (
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
);

export default Navigation;