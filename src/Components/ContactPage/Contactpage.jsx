import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap"
import "./Contactpage.scss"
import { useState } from "react";
import axios from "axios";


const ContactPage = () => {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            handleData().then(data => {
                alert('thank you for your message')
            }).catch(err => {
                setError(true);
                console.log(err)
            })
        }

        setValidated(true);
        console.log(contactData)
    }

    const handleData = async() => {
        await axios.post(`${process.env.REACT_APP_API_URL}/emails`, {...contactData}, {})
    }

    return (
        <div>
            <Row>
                <Col className="contactCol">
                    <h1 className="contactFormTitle">Contact us</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="contactForm">
                        <Form.Group>
                            <FloatingLabel className="floatingLabel" controlId="floatingTextarea" label="Name">
                                <Form.Control required aria-required as="textarea" placeholder="Name" value={contactData.name} onChange={(e) => {setContactData({
                                    ...contactData,
                                    name: e.target.value
                                })}}/>
                            </FloatingLabel>
                            <FloatingLabel className="floatingLabel" controlId="floatingTextarea" label="Email Address (Required)">
                                <Form.Control required aria-required type="email" placeholder="Email Address" value={contactData.email} onChange={(e) => {setContactData({
                                    ...contactData,
                                    email: e.target.value
                                })}}/>
                                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel className="floatingLabel" controlId="floatingTextarea2" label="Your Message (Required)">
                                <Form.Control required aria-required as="textarea" placeholder="Leave your message here" style={{height: "100px"}} value={contactData.message} onChange={(e) => {setContactData({
                                    ...contactData,
                                    message: e.target.value
                                })}}/>
                                <Form.Control.Feedback type="invalid" >Please enter a message.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveButtonGroup">
                            <Button type="submit" className="reserveButton" variant="custom">Contact Us</Button>
                        </Form.Group>
                        {error && <p style={{color:'red'}}>Error sending form to server.</p>}
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default ContactPage;