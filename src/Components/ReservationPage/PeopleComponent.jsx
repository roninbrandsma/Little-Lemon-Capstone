import { FloatingLabel, Form } from "react-bootstrap"
import "./Reservationpage.scss"

export const PeopleComponent = ({ setFormData, formData, tooManyGuests }) => {
    return (
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
    )
}