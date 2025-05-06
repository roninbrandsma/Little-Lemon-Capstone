import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router"

import "./Confirmationpage.scss"


const Confimation = () => {
    let navigate = useNavigate();

    return(
        <div>
            <Row>
                <Col className="confirmCol">
                    <Container className="confirmCont">
                        <Card className="confirmCard">
                            <Card.Title className="confirmTitle">Thank You For Your Reservation</Card.Title>
                            <div className="confirmButtonDiv">
                                <Button onClick={() => navigate("/")} type="submit" className="confirmButton" variant="custom">Home</Button>
                            </div>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}


export default Confimation;