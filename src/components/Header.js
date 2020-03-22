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

        const studentLinks = (
            <Fragment>
                <Nav className="mr-auto">
                    <Nav.Link href="/student-dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/student-profile">Profile</Nav.Link>
                    <Nav.Link href="/student-calender">Calender</Nav.Link>
                    <Nav.Link href="/student-notification">Notification</Nav.Link>
                    <Nav.Link href="/student-result">Result</Nav.Link>
                    <Logout></Logout>
                </Nav>
            </Fragment>
        );

        const adminLinks = (
            <Fragment>
                <Nav className="mr-auto">
                    <Nav.Link href="/admin-dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/admin-calender">Calender</Nav.Link>
                    <Nav.Link href="/admin-notification">Notification</Nav.Link>
                    <Nav.Link href="/admin-result">Result</Nav.Link>
                    <Logout></Logout>
                </Nav>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="User" id="collasible-nav-dropdown-user">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="About Us" id="collasible-nav-dropdown-about-us">
                        <NavDropdown.Item href="/history">History</NavDropdown.Item>
                        <NavDropdown.Item href="/alumni">Alumni</NavDropdown.Item>
                        <NavDropdown.Item href="/faculty-research">Faculty &amp; Research</NavDropdown.Item>
                        <NavDropdown.Item href="/courses-offered">Courses Offered</NavDropdown.Item>
                        <NavDropdown.Item href="/students-achievements-awards">Achievements &amp; Awards</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavDropdown title="Company" id="collasible-nav-dropdown-company">
                        <NavDropdown.Item href="/procedure">Procedure</NavDropdown.Item>
                        <NavDropdown.Item href="/company-register">Register</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
            </Fragment>
        );

        if (isAuthenticated) {

        }

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">TNP Portal IGDTUW</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">     
                
                { isAuthenticated ? (user.role === "ADMIN" ? adminLinks : studentLinks ) : guestLinks }
                 
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Header);