import { useNavigate } from "react-router"
import { Container, Row, Col, Button, Card, CardTitle} from "react-bootstrap"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import "./Homepage.scss"
// import Placeholder from 'react-bootstrap/Placeholder';

const HomePage = () => {
    let navigate = useNavigate();

    return(
        <div>
            <div className='heroSectionDiv'>
                <Container className="heroContainer">
                    <Row>
                        <Col className="heroContInfo">
                            <h2>Little Lemon</h2>
                            <h5>4756 N Lincoln Ave, Chicago, IL 60625</h5>
                            <p  className="heroPara">Open form 12:00 to 16:00, 15:00 to 22:00 from Tuesday to Sunday. We serve fresh, homely Italian American cuisine that is sure to impress.</p>
                            <Button aria-label="Reservations" onClick={() => navigate("/reservations")} className="reserveBtn" variant="custom" >Reserve a Table</Button>
                        </Col>
                        <Col className="heroContImg">
                            <img className="restImage" src={require("../../assets/restaurant.jpg")} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="specialSectionDiv">
                <div className="specialHeadingDiv">
                    <h1 className="specialHeading">Our Weekly Specials</h1>
                    <Button aria-label="Menu" className="menuBtn" variant="custom">Menu</Button>
                </div>
                <Container className="specialContainer">
                    <Row>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard"  variant="light">
                                <Card.Img  className="specialSectionCardImg"  src={require("../../assets/Burrata-Bruschetta.jpg")}/>
                                <div className="specialCardTitleDiv">
                                    <CardTitle className="specialCardTitle">Bruchetta</CardTitle>
                                    <CardTitle className="specialCardPrice">$6.30</CardTitle>
                                </div>
                                <Card.Text className="specialSectionCardText">Try our bruschetta, made with our housemade sourdough bread, locally produced burrata and oven roasted cherry tomatoes topped with olive oil and balsamic vinegar.</Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard">
                                <Card.Img  className="specialSectionCardImg"  src={require("../../assets/Lemon-Ricotta-Cake.webp")}/>
                                <div className="specialCardTitleDiv">
                                    <CardTitle className="specialCardTitle">Lemon Ricotta Slice</CardTitle>
                                    <CardTitle className="specialCardPrice">$7.20</CardTitle>
                                </div>
                                <Card.Text className="specialSectionCardText">A slice of our housemade lemon ricotta cake topped with a strawberry and raspberry syrup and fresh fruits.</Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard">
                                <Card.Img  className="specialSectionCardImg"  src={require("../../assets/greek salad.jpg")}/>
                                <div className="specialCardTitleDiv">
                                    <CardTitle className="specialCardTitle">Greek Salad</CardTitle>
                                    <CardTitle className="specialCardPrice">$9.00</CardTitle>
                                </div>
                                <Card.Text className="specialSectionCardText">Our take on a greek salad, with red onion, green pepper, cherry tomato, olives and feta cheese, coated with our housemade greek dressing.</Card.Text>
                            </Card>
                        </Col>
                        <Col className="specialSectionCol">
                            <Card className="specialSectionCard">
                                <Card.Img  className="specialSectionCardImg"  src={require("../../assets/veal-milanese.jpg")}/>
                                <div className="specialCardTitleDiv">
                                    <CardTitle className="specialCardTitle">Veal Milanese</CardTitle>
                                    <CardTitle className="specialCardPrice">$18.00</CardTitle>
                                </div>
                                <Card.Text className="specialSectionCardText">Made with locally sourced veal chop, crusted with flour and shallow fryed, served with a tomato and rocket salad.</Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="reviewSection">
                <h1 className="reviewSectionTitle">Customer Reviews</h1>
                    <Container className="reviewCont">
                        <Row>
                            <Col className="reviewCol">
                                <Card className="reviewCard">
                                    <Container className="userContainer">
                                        <Card.Img className="reviewUserImage" src={require("../../assets/default-user-image.webp")} />
                                        <div className="reviewName">
                                            <Card.Title className="reviewNameTitle">William Andrews</Card.Title>
                                            <Rating value={4.5} readOnly />
                                        </div>
                                    </Container>
                                    <Card.Body className="review">Decent place. I found the entrees to be very agreeable to my personal flavor-profile. The decor was unique and incredible. I could see myself being a regular here.</Card.Body>
                                </Card>
                            </Col>
                            <Col className="reviewCol">
                                <Card className="reviewCard">
                                    <Container className="userContainer">
                                        <Card.Img className="reviewUserImage" src={require("../../assets/default-user-image.webp")} />
                                        <div className="reviewName">
                                            <Card.Title className="reviewNameTitle">Hugo Ruiz</Card.Title>
                                            <Rating value={4} readOnly />
                                        </div>
                                    </Container>
                                    <Card.Body className="review">This place was nearby and I decided to check it out. Make sure to save room for dessert, because that was the best part of the meal! Everything I tried was bursting with flavor.</Card.Body>
                                </Card>
                            </Col>
                            <Col className="reviewCol">
                                <Card className="reviewCard">
                                    <Container className="userContainer">
                                        <Card.Img className="reviewUserImage" src={require("../../assets/default-user-image.webp")} />
                                        <div className="reviewName">
                                            <Card.Title className="reviewNameTitle">Amelia King</Card.Title>
                                            <Rating value={4} readOnly />
                                        </div>
                                    </Container>
                                    <Card.Body className="review">Decent place. I found the ambiance to be very charming.</Card.Body>
                                </Card>
                            </Col>
                            <Col className="reviewCol">
                                <Card className="reviewCard">
                                    <Container className="userContainer">
                                        <Card.Img className="reviewUserImage" src={require("../../assets/default-user-image.webp")} />
                                        <div className="reviewName">
                                            <Card.Title className="reviewNameTitle">Hanson Berry</Card.Title>
                                            <Rating value={5} readOnly />
                                        </div>
                                    </Container>
                                    <Card.Body className="review">I stumbled on this undiscovered gem right in our neighboorhood. The waiter was prompt and polite. The food is simply to die for. This is definitely a spot I'll be frequenting.</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </div>
            <div className="aboutSection" id="aboutsection">
                <Container className="aboutCont">
                    <Row>
                        <Col className="aboutTextCont">
                            <h2 className="aboutTextTitle" >About Us</h2>
                            <p className="aboutTextPara" >Little Lemon is an Italian American restaurant located in Chicago, Illinois. Opened in 2017 by chefs/owners Mario and Adrian with the aim to bring their experience and love of Italian cuisine to Lincoln Square.</p>
                        </Col>
                        <Col className="aboutImgCont">
                            <img className="aboutImg" src={require("../../assets/Mario and Adrian b.jpg")} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomePage;