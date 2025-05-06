import "react-datepicker/dist/react-datepicker.css"
import "./Reservationpage.scss"

import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"
import axios from "axios";
import moment from "moment";

const Reservation = () => {
    let navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false);
    const [tooManyGuests, setTooManyGuests] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        numberOfPeople: '',
        occasion: ''
    })

    useEffect(() => {
        if (Number(formData.numberOfPeople) > 10) {
            setTooManyGuests(true)
        } else {
            setTooManyGuests(false)
        }
    }, [formData.numberOfPeople])

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        const form = event.currentTarget;
        if (tooManyGuests) {
            return
        }

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            handleData().then(data => {
                navigate("/confirmation")
            }).catch(err => {
                setError(true)
                console.log(err)
            })
        }
        setValidated(true)
    }

    const handleData = async() => {
        let hours = formData.time.split(':')[0]
        let minutes = formData.time.split(':')[1]
        const date = moment(formData.date).add(hours, 'hours').add(minutes, 'minutes').toISOString(true)
        await axios.post(`${process.env.REACT_APP_API_URL}/reservations`, {...formData, formattedDate: date}, {})
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
                                <Form.Control required aria-required="true"  type="date" min={new Date().toISOString().slice(0, 10)} placeholder="Date" name="dateTime" value={formData.date} onChange={(e) => {setFormData({
                                    ...formData,
                                    date: e.target.value
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
                                    <option>16:00</option>
                                    <option>16:30</option>
                                    <option>17:00</option>
                                    <option>17:30</option>
                                    <option>18:00</option>
                                    <option>18:30</option>
                                    <option>19:00</option>
                                    <option>19:30</option>
                                    <option>20:00</option>
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
                                {tooManyGuests && <p style={{color:'red'}}>If more than 10 people, please email us.</p>}
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