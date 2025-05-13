import { useNavigate } from "react-router"
import { Container, Row, Col, Button } from "react-bootstrap"
import '@smastrom/react-rating/style.css'
import "./Homepage.scss"
import { CardComponent } from "./CardComponent"
import { ReviewComponent } from "./ReviewComponent"
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
                        <CardComponent cardImg={require("../../assets/Burrata-Bruschetta.jpg")} itemName={"Bruchetta"} itemPrice={"$6.30"} cardText={"Try our bruschetta, made with our housemade sourdough bread, locally produced burrata and oven roasted cherry tomatoes topped with olive oil and balsamic vinegar."}/>
                        <CardComponent cardImg={require("../../assets/Lemon-Ricotta-Cake.webp")} itemName={"Lemon Ricotta Slice"} itemPrice={"$7.20"} cardText={"A slice of our housemade lemon ricotta cake topped with a strawberry and raspberry syrup and fresh fruits."}/>
                        <CardComponent cardImg={require("../../assets/greek salad.jpg")} itemName={"Greek Salad"} itemPrice={"$9.00"} cardText={"Our take on a greek salad, with red onion, green pepper, cherry tomato, olives and feta cheese, coated with our housemade greek dressing."}/>
                        <CardComponent cardImg={require("../../assets/veal-milanese.jpg")} itemName={"Veal Milanese"} itemPrice={"$18.00"} cardText={"Made with locally sourced veal chop, crusted with flour and shallow fryed, served with a tomato and rocket salad."}/>
                    </Row>
                </Container>
            </div>
            <div className="reviewSection">
                <h1 className="reviewSectionTitle">Customer Reviews</h1>
                    <Container className="reviewCont">
                        <Row>
                            <ReviewComponent reviewImg={require("../../assets/default-user-image.webp")} reviewName={"William Andrews"} rating={4.5} review={"Decent place. I found the entrees to be very agreeable to my personal flavor-profile. The decor was unique and incredible. I could see myself being a regular here."} />
                            <ReviewComponent reviewImg={require("../../assets/default-user-image.webp")} reviewName={"Hugo Ruiz"} rating={4} review={"This place was nearby and I decided to check it out. Make sure to save room for dessert, because that was the best part of the meal! Everything I tried was bursting with flavor."} />
                            <ReviewComponent reviewImg={require("../../assets/default-user-image.webp")} reviewName={"Amelia King"} rating={4} review={"Decent place. I found the ambiance to be very charming."} />
                            <ReviewComponent reviewImg={require("../../assets/default-user-image.webp")} reviewName={"Hanson Berry"} rating={5} review={"I stumbled on this undiscovered gem right in our neighboorhood. The waiter was prompt and polite. The food is simply to die for. This is definitely a spot I'll be frequenting."} />
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