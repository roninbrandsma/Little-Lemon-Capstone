import "react-datepicker/dist/react-datepicker.css"
import "./Reservationpage.scss"

import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import axios from "axios";
import moment from "moment";
import { NameComponent } from "./NameComponent";
import { EmailComponent } from "./EmailComponent";
import { DateComponent } from "./DateComponent";
import { TimeComponent } from "./TimeComponent";
import { PeopleComponent } from "./PeopleComponent";
import { OccasionComponent } from "./OccasionComponent";

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
        await axios.post(`http://3.248.191.137:8080/reservations`, {...formData, formattedDate: date}, {})
    }

    return (
        <div>
            <Row>
                <Col className="reserveCol">
                    <h1 className="reserveFormTitle">Reserve a Table</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method="post" className="reserveForm">
                        <NameComponent formData={formData} setFormData={setFormData} />
                        <EmailComponent formData={formData} setFormData={setFormData} />
                        <DateComponent formData={formData} setFormData={setFormData} />
                        <TimeComponent formData={formData} setFormData={setFormData} />
                        <PeopleComponent formData={formData} setFormData={setFormData} tooManyGuests={tooManyGuests} />
                        <OccasionComponent formData={formData} setFormData={setFormData} />
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