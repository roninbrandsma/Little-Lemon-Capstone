import { FloatingLabel, Form } from "react-bootstrap"
import "./Reservationpage.scss"

export const TimeComponent = ({ setFormData, formData }) => {
    return (
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
    )
}