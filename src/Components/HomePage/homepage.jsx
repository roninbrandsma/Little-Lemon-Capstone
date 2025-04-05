import { Container, Row, Col, Button, Card } from "react-bootstrap";


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
                                <Card.Img src="../../assets/bruchetta.svg"/>
                                <Card.Text></Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard"></Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard"></Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard"></Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="reviewSection">

            </div>
            <div className="aboutSection">

            </div>
        </>
    )
}

export default HomePage