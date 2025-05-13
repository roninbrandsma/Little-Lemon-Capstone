import { Card, CardTitle, Col } from "react-bootstrap"
import "./Homepage.scss"

export const CardComponent = ({ itemName, itemPrice, cardImg, cardText }) => {
    return (
        <Col className="specialSectionCol">
            <Card className="specialSectionCard"  variant="light">
                <Card.Img  className="specialSectionCardImg"  src={cardImg}/>
                <div className="specialCardTitleDiv">
                    <CardTitle className="specialCardTitle">{itemName}</CardTitle>
                    <CardTitle className="specialCardPrice">{itemPrice}</CardTitle>
                </div>
                <Card.Text className="specialSectionCardText">{cardText}</Card.Text>
            </Card>
        </Col>
    )
}