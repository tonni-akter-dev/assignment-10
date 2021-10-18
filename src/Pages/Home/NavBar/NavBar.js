import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
  <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">MediCare</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink activeClassName="navbarDesign" className="navbar" to="/home">Home</NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/link">Pages</NavLink>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Research</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        <NavLink activeClassName="navbarDesign" className="navbar" to="/services">Services</NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/blog">Blog</NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/blog">
        <Button className="rounded-pill button-design">Make Appointment</Button>
            </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;