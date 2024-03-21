import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-bootstrap";

import "./header.scss"

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" classname="headertext">Little Lemon</Navbar.Brand>
                    <Nav classname="navlinks">
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Menu</NavLink>
                        <NavLink>Reservations</NavLink>
                        <NavLink>Order Online</NavLink>
                        <NavLink>Login</NavLink>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;