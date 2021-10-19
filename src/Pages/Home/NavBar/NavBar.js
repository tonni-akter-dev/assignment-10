import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const NavBar = () => {
  const { user, logOutUser } = useAuth();
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home"><i class="fab fa-buffer"></i> MediCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink activeClassName="navbarDesign" className="navbar" to="/home">Home</NavLink>
              <NavLink activeClassName="navbarDesign" className="navbar" to="/about1">About</NavLink>
              <NavLink activeClassName="navbarDesign" className="navbar" to="/doctors">Doctors</NavLink>
              <NavLink activeClassName="navbarDesign" className="navbar" to="/blogs">Blog</NavLink>
              <NavLink activeClassName="navbarDesign" className="navbar" to="/service">Services</NavLink>
              <NavLink activeClassName="navbarDesign" className="navbar" to="/contact">Contact</NavLink>
            </Nav>
            <Nav>
              {user.email &&
                <button className="me-3 mt-2 bg-info p-2" style={{ height: '50px' }}>{user.displayName}</button>}
              {user.email ?
                <NavLink activeClassName="navbarDesign" className="navbar" to="/login">
                  <button onClick={logOutUser} className="btn btn-dark">Logout</button>
                </NavLink>

                : <NavLink activeClassName="navbarDesign" className="navbar" to="/login">
                  <Button className="button-design">Login</Button>
                </NavLink>
              }
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