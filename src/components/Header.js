import React, { Component, Fragment } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logout from './Logout';

class Header extends Component {

    state = {
        collapseOnSelect: true,
        defaultExpanded: true
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <Logout></Logout>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavDropdown title="User" id="collasible-nav-dropdown-user">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
            </Fragment>
        );

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">TNP Portal IGDTUW</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                { isAuthenticated ? authLinks : guestLinks }
                <NavDropdown title="About Us" id="collasible-nav-dropdown-about-us">
                    <NavDropdown.Item href="/history">History</NavDropdown.Item>
                    <NavDropdown.Item href="/alumni">Alumni</NavDropdown.Item>
                    <NavDropdown.Item href="/faculty-research">Faculty &amp; Research</NavDropdown.Item>
                    <NavDropdown.Item href="/courses-offered">Courses Offered</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <NavDropdown title="Company" id="collasible-nav-dropdown-company">
                    <NavDropdown.Item href="/procedure">Procedure</NavDropdown.Item>
                    <NavDropdown.Item href="/company-register">Register</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Header);