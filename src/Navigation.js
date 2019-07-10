import React from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Navbar.Brand href="/">
                <img
                alt=""
                src={logo}
                width="50"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link> 
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Gallery" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/usa">USA</NavDropdown.Item>
                        <NavDropdown.Item href="/eu">Europe</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  )};


export default Navigation;