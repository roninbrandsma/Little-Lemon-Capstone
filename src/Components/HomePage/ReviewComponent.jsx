import { Col, Card, Container, } from "react-bootstrap"
import { Rating } from "@smastrom/react-rating"
import "./Homepage.scss"


export const ReviewComponent = ( {reviewImg, reviewName, rating, review} ) => {
    return (
        <Col className="reviewCol">
            <Card className="reviewCard">
                <Container className="userContainer">
                    <Card.Img className="reviewUserImage" src={reviewImg} />
                    <div className="reviewName">
                        <Card.Title className="reviewNameTitle">{reviewName}</Card.Title>
                        <Rating value={rating} readOnly />
                    </div>
                </Container>
                <Card.Body className="review">{review}</Card.Body>
            </Card>
        </Col>
    )
}