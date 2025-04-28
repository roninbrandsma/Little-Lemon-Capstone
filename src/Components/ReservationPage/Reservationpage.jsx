import "react-datepicker/dist/react-datepicker.css"
import "./Reservationpage.scss"

import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"
import { fetchAPI, submitAPI } from "../../API.js";

export const initialiseTimes = (date) => {
    return fetchAPI(date)
}

const Reservation = () => {
    let navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useState()

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: new Date(),
        time: '',
        numberOfPeople: '',
        occasion: ''
    })

    useEffect(() => {
        setAvailableTimes(initialiseTimes(formData.date))
    }, [formData.date])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(submitAPI(formData)) {
            navigate("/confirmation")
        }
        setValidated(true)
    }


    return (
        <div>
            <Row>
                <Col className="reserveCol">
                    <h1 className="reserveFormTitle">Reserve a Table</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method="post" className="reserveForm">
                        <Form.Group className="reserveNameGroup">
                            <FloatingLabel className="floatingLabel name" label="First Name (Required)">
                                <Form.Control required aria-required="true"  className="formName" type="Text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={(e) => {setFormData({
                                    ...formData,
                                    firstName: e.target.value
                                })}}/>
                                <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                            <FloatingLabel className="floatingLabel name" label="Last Name (Required)">
                                <Form.Control required aria-required="true"  className="formName" type="Text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={(e) => {setFormData({
                                    ...formData,
                                    lastName: e.target.value
                                })}}/>
                                <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveEmailGroup">
                            <FloatingLabel className="floatingLabel" label="Email (Required)">
                                <Form.Control required aria-required="true"  type="email" placeholder="email" name="email" value={formData.email} onChange={(e) => {setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}}/>
                                <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveDateGroup">
                            <FloatingLabel className="floatingLabel" label="Date (Required)">
                                <Form.Control required aria-required="true"  type="date" min={new Date().toISOString().slice(0, 10)} placeholder="Date" name="dateTime" value={formData.date.toISOString().slice(0, 10)} onChange={(e) => {setFormData({
                                    ...formData,
                                    date: new Date(e.target.value),
                                    time: ''
                                })}}/>
                                <Form.Control.Feedback type="invalid">Please enter a date.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveTimeGroup">
                            <FloatingLabel className="floatingLabel" label="Time (Required)">
                                <Form.Select required aria-required="true"  type="text" placeholder="Date" name="dateTime" value={formData.time} onChange={(e) => {setFormData({
                                    ...formData,
                                time: e.target.value
                                })}}>
                                    <option></option>
                                    {availableTimes && availableTimes.map(x => {return <option>{x}</option>})}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please enter a time.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reservePeopleGroup">
                            <FloatingLabel className="floatingLabel" label="Number of People (Required)">
                                <Form.Control required aria-required="true"  type="Number" min={"1"} max={"10"} placeholder="1" name="numberOfPeople" value={formData.numberOfPeople} onChange={(e) => {setFormData({
                                    ...formData,
                                    numberOfPeople: e.target.value
                                })}}/>
                                <Form.Control.Feedback type="invalid">Please enter how many people are dining with you.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveOccasion">
                            <FloatingLabel className="floatingLabel" label="Occasion" value={formData.occasion} onChange={(e) => {setFormData({
                                    ...formData,
                                    occasion: e.target.value
                                })}}>
                                <Form.Select type="text" placeholder="Occasion" name="occasion">
                                    <option></option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please enter how many people are dining with you.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="reserveButtonGroup">
                            <Button type="submit" className="reserveButton" variant="custom">Reserve</Button>
                        </Form.Group>
                        {error && <p style={{color:'red'}}>Error sending form to server.</p>}
                    </Form>
                </Col>
            </Row>
        </div>
    )
}


export default Reservation