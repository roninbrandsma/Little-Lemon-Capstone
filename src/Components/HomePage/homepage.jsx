import { Container, Row, Col, Button, Card, CardTitle, Carousel } from "react-bootstrap";
import "../../assets/restaurant.jpg";
import "../../assets/bruchetta.svg";


const HomePage = () => {
    return(
        <>
            <div className='heroSectionDiv'>
                <Container>
                    <Row>
                        <Col className="heroContInfo">
                            <h4>Little Lemon</h4>
                            <p>Chicago</p>
                            <p className="heroPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget mattis orci. Praesent ultrices, nunc in accumsan elementum, lacus ipsum lacinia massa, vitae feugiat ante odio non diam. Donec velit lectus, eleifend in turpis nec, suscipit tincidunt sem.</p>
                            <Button className="reserveBtn" variant="custom" >Reserve a Table</Button>
                        </Col>
                        <Col className="heroContImg">
                            <img className="restImage" src="../../assets/restaurant.jpg" alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="specialSectionDiv">
                <Container>
                    <Row>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard"  variant="light">
                                <Card.Img  className="specialSectionCardImg"  src="../../assets/bruchetta.svg"/>
                                <CardTitle className="specialSectionCardTitle">Bruchetta</CardTitle>
                                <Card.Text className="specialSectionCardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere lacinia est eget pharetra.</Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard">
                                <Card.Img  className="specialSectionCardImg"  src="../../assets/bruchetta.svg"/>
                                <CardTitle className="specialSectionCardTitle">Bruchetta</CardTitle>
                                <Card.Text className="specialSectionCardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere lacinia est eget pharetra.</Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard">
                                <Card.Img  className="specialSectionCardImg"  src="../../assets/bruchetta.svg"/>
                                <CardTitle className="specialSectionCardTitle">Bruchetta</CardTitle>
                                <Card.Text className="specialSectionCardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere lacinia est eget pharetra.</Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard">
                                <Card.Img  className="specialSectionCardImg"  src="../../assets/bruchetta.svg"/>
                                <CardTitle className="specialSectionCardTitle">Bruchetta</CardTitle>
                                <Card.Text className="specialSectionCardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere lacinia est eget pharetra.</Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="reviewSection">
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Img Text="First Slide"/>
                        <Carousel.Caption>
                            <h3>First Slide Lable</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="aboutSection">

            </div>
        </>
    )
}

export default HomePage