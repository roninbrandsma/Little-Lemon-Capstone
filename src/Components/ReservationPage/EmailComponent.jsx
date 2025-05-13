import { FloatingLabel, Form } from "react-bootstrap"
import "./Reservationpage.scss"

export const EmailComponent = ({ setFormData, formData }) => {
    return (
        <Form.Group className="reserveEmailGroup">
            <FloatingLabel className="floatingLabel" label="Email (Required)">
                <Form.Control required aria-required="true"  type="email" placeholder="email" name="email" value={formData.email} onChange={(e) => {setFormData({
                    ...formData,
                    email: e.target.value
                })}}/>
                <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
            </FloatingLabel>
        </Form.Group>
    )
}