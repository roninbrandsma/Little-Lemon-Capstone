import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import "./Header.scss"
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return(
        <Navbar className="navbar">
            <Container fluid>
                <Navbar.Brand href="/home" className="headertext">Little Lemon</Navbar.Brand>
                <Nav className="navlinks">
                    <NavLink to="/reservations" className="headerlink" >Reservations</NavLink>
                    <NavLink to="/contact" className="headerlink">Contact</NavLink>
                    <HashLink to="/home#aboutsection" smooth className="headerlink">About</HashLink>
                </Nav>
            </Container>
        </Navbar>
    )
}



export default Header