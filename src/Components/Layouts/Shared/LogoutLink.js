import React, { PropTypes } from 'react';
import { NavLink } from 'reactstrap';

const LogoutLink = ({ onClick, username }) => (
    <NavLink onClick={ (event) => onClick(event) } href="#">Logout ({ username })</NavLink>
);

LogoutLink.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired
};

export default LogoutLink;