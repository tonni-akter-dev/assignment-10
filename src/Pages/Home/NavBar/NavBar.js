import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
  <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"><i class="fab fa-buffer"></i> MediCare</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink activeClassName="navbarDesign" className="navbar" to="/home">Home</NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/about1">About</NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/doctors">Doctors</NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/link">Departments</NavLink> 
        <NavLink activeClassName="navbarDesign" className="navbar" to="/services">Services</NavLink>
       
        {/* <NavLink activeClassName="navbarDesign" className="navbar" to="/blog">
        <Button className="rounded-pill button-design">Make Appointment</Button>
            </NavLink> */}
        <NavLink activeClassName="navbarDesign" className="navbar" to="/login">
        <Button className="button-design">Login</Button>
            </NavLink>
        <NavLink activeClassName="navbarDesign" className="navbar" to="/register">
        <Button className="button-design">Register</Button>
            </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;