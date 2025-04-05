import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import "../../variables.scss";
import "./header.scss"

const Header = () => {
    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/" className="headertext">
                        <img
                            src="../../../public/assets/Logo.jpg"
                            alt=""
                            height={40}
                            width={148}
                        />
                    </Navbar.Brand>
                    <Nav className="navlinks">
                        <NavLink to="/portfolio" className="headertext headerlink" >Portfolio</NavLink>
                        <NavLink to="/contact" className="headertext headerlink">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}



export default Header