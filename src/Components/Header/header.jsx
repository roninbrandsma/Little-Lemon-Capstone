import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-bootstrap";
import Logo from '../assets/Logo.svg';


import "../Header/header.scss"

const Header = () => {
    return(
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="/" classname="logo">
                    <img src={Logo} alt="" />
                    <Nav classname="navlinks">
                        <NavLink>About</NavLink>
                        <NavLink>Menu</NavLink>
                        <NavLink>Reservations</NavLink>
                        <NavLink>Order Online</NavLink>
                        <NavLink>Login</NavLink>
                    </Nav>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;