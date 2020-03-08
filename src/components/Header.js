import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends Component {

    state = {
        collapseOnSelect: true,
        defaultExpanded: true
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">TNP Portal IGDTUW</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <NavDropdown title="About Us" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/history">History</NavDropdown.Item>
                    <NavDropdown.Item href="/alumni">Alumni</NavDropdown.Item>
                    <NavDropdown.Item href="/faculty-research">Faculty &amp; Research</NavDropdown.Item>
                    <NavDropdown.Item href="/courses-offered">Courses Offered</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <NavDropdown title="Company" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/procedure">Procedure</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;