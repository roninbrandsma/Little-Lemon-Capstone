import { FloatingLabel, Form } from "react-bootstrap"
import "./Reservationpage.scss"

export const NameComponent = ({ setFormData, formData }) => {
    return (
        <Form.Group className="reserveNameGroup">
            <FloatingLabel className="floatingLabel name" label="First Name (Required)">
                <Form.Control required aria-required="true"  className="formName" type="Text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={(e) => {setFormData({
                    ...formData,
                    firstName: e.target.value
                })}}/>
                <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel className="floatingLabel name" label="Last Name (Required)">
                <Form.Control required aria-required="true"  className="formName" type="Text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={(e) => {setFormData({
                    ...formData,
                    lastName: e.target.value
                })}}/>
                <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
            </FloatingLabel>
        </Form.Group>
    )
}