import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logout from '../../../Containers/Logout';

const Navigation = () => (
    <Navbar toggleable color="skyblue" light >
        <NavbarBrand href="/">Dashboard</NavbarBrand>
        <Collapse isOpen={ true } navbar>
            <Nav navbar className="mr-auto">
                <NavItem><NavLink href="/audience">Audience</NavLink></NavItem>
                <NavItem><NavLink href="/engagement"disabled>Engagement</NavLink></NavItem>
                <NavItem><NavLink href="/schedule"disabled>Schedule</NavLink></NavItem>
                <NavItem><NavLink href="/bot-hunter"disabled>Bot-hunter</NavLink></NavItem>
            </Nav>
            <Nav navbar>
                <NavItem><NavLink href="/profile" disabled>Profile</NavLink></NavItem>
                <NavItem><Logout /></NavItem>
            </Nav>
        </Collapse>
    </Navbar>
);

export default Navigation;