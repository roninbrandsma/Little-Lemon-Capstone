import { FloatingLabel, Form } from "react-bootstrap"
import "./Reservationpage.scss"

export const DateComponent = ({ setFormData, formData }) => {
    return (
        <Form.Group className="reserveDateGroup">
            <FloatingLabel className="floatingLabel" label="Date (Required)">
                <Form.Control required aria-required="true"  type="date" min={new Date().toISOString().slice(0, 10)} placeholder="Date" name="dateTime" value={formData.date} onChange={(e) => {setFormData({
                    ...formData,
                    date: e.target.value
                })}}/>
                <Form.Control.Feedback type="invalid">Please enter a date.</Form.Control.Feedback>
            </FloatingLabel>
        </Form.Group>
    )
}