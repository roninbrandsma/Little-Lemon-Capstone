import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="/" classname="headertext">Little Lemon</Navbar.Brand>
                    <Nav classname="navlinks">
                        <NavLink></NavLink>
                    </Nav>
            </Container>
        </Navbar>
    )
}