import { Row, Col, Container } from "react-bootstrap"

import "../Footer/Footer.scss"

const Footer = () => {
    return(
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col className="footerCol">
                        <img className="footerImg" src={require("../../assets/little-lemon-logo.png")} alt="" />
                    </Col>
                    <Col className="footerCol">
                        <h1>Navigation</h1>
                        <ul className="footerTitle">
                            <li>
                                <a aria-label="Home" href="/" className="footerLink">Home</a>
                            </li>
                            <li>
                                <a aria-label="Menu" href="/" className="footerLink">Menu</a>
                            </li>
                            <li>
                                <a aria-label="Reservations" href="/reservations" className="footerLink">Reservations</a>
                            </li>
                            <li>
                                <a aria-label="Contact" href="/contact" className="footerLink">Contact</a>
                            </li>
                            <li>
                                <a href="#aboutsection" aria-label="About" smooth className="footerLink">About</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footerCol">
                        <h1 className="footerTitle">Contact</h1>
                        <ul className="addressList">
                            <li>
                                <p className="footerContact">4756 N Lincoln Ave,</p>
                            </li>
                            <li>
                                <p className="footerContact">Chicago,</p>
                            </li>
                            <li>
                                <p className="footerContact">IL 60625</p>
                            </li>
                        </ul>
                        <ul className="contactList">
                            <li>
                                <p className="footerContact">littlelemon@gmail.com</p>
                            </li>
                            <li>
                                <p className="footerContact">(773) 756-6559</p>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footerCol">
                        <h1 className="footerTitle">Social Media</h1>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footerLink">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footerLink">Facebook</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

 export default Footer