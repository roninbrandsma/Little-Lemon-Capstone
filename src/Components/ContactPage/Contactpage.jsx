import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap"
import "./Contactpage.scss"
import { useState } from "react";

const ContactPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }
    return (
        <div>
            <Row>
                <Col className="contactCol">
                    <h1 className="contactFormTitle">Contact us</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="contactForm">
                        <Form.Group>
                            <FloatingLabel className="floatingLabel" controlId="floatingTextarea" label="Name">
                                <Form.Control as="textarea" placeholder="Name"/>
                            </FloatingLabel>
                            <FloatingLabel className="floatingLabel" controlId="floatingTextarea" label="Email Address">
                                <Form.Control  type="email" placeholder="Email Address"/>
                                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel className="floatingLabel" controlId="floatingTextarea2" label="Your Message">
                                <Form.Control  as="textarea" placeholder="Leave your message here" style={{height: "100px"}}/>
                                <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveButtonGroup">
                            <Button type="submit" className="reserveButton" variant="custom">Contact Us</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default ContactPage;