import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"

import "react-datepicker/dist/react-datepicker.css"
import 'react-calendar/dist/Calendar.css';
import "./Reservationpage.scss"
import { useState } from "react";

const Reservation = () => {
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
                <Col className="reserveCol">
                    <h1 className="reserveFormTitle">Reserve a Table</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="reserveForm">
                        <Form.Group className="reserveNameGroup">
                            <FloatingLabel className="floatingLabel name" label="First Name">
                                <Form.Control required className="formName" type="Text" placeholder="First Name"/>
                                <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                            <FloatingLabel className="floatingLabel name" label="Last Name">
                                <Form.Control className="formName" type="Text" placeholder="Last Name"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reservePeopleGroup">
                            <FloatingLabel className="floatingLabel" label="Number of People">
                                <Form.Control required type="Number" placeholder="Number of People"/>
                                <Form.Control.Feedback type="invalid">Please enter how many people are dining with you.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveDateGroup">
                            <FloatingLabel className="floatingLabel" label="Date">
                                <Form.Control required type="date" placeholder="Date"/>
                                <Form.Control.Feedback type="invalid">Please enter date.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveTimeGroup">
                            <FloatingLabel className="floatingLabel" label="Time">
                                <Form.Control required type="time" placeholder="Time"/>
                                <Form.Control.Feedback type="invalid">Please enter time.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveEmailGroup">
                            <FloatingLabel className="floatingLabel" label="Email Address">
                                <Form.Control required type="email" placeholder="Email Address"/>
                                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reservePhoneGroup">
                            <FloatingLabel className="floatingLabel" label="Phone Number">
                                <Form.Control type="Text" placeholder="Phone Number"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveButtonGroup">
                            <Button type="submit" className="reserveButton" variant="custom">Reserve</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Reservation