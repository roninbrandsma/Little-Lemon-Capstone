import { FloatingLabel, Form } from "react-bootstrap"
import "./Reservationpage.scss"

export const OccasionComponent = ({ setFormData, formData }) => {
    return (
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
    )
}