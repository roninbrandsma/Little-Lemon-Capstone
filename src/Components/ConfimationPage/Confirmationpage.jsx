import { Button } from "react-bootstrap"
import { Card, Container } from "react-bootstrap"
import { useNavigate } from "react-router"

import "./Confirmationpage.scss"


const Confimation = () => {
    let navigate = useNavigate();

    return(
        <div>
            <Container className="confirmCont">
                <Card className="confirmCard">
                    <Card.Title className="confirmTitle">Thank You For Your Reservation</Card.Title>
                    <div className="confirmButtonDiv">
                        <Button onClick={() => navigate("/")} type="submit" className="confirmButton" variant="custom">Home</Button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}


export default Confimation;