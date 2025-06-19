import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

import "./header.scss"

const Header = () => {
    return(
        <Navbar className="navbar">
            <Container fluid>
                <Navbar.Brand href="/" className="headertext">Little Lemon</Navbar.Brand>
                <Nav className="navlinks">
                    <NavLink aria-label="Home" to="/" className="headerlink" >Menu</NavLink>
                    <NavLink aria-label="Reservations" to="/reservations" className="headerlink" >Reservations</NavLink>
                    <NavLink aria-label="Contact" to="/contact" className="headerlink">Contact</NavLink>
                    <a href="#aboutsection" aria-label="Contact Section" smooth className="headerlink">About</a>
                </Nav>
            </Container>
        </Navbar>
    )
}



export default Header