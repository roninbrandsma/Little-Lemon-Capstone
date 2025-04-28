import { render, screen } from "@testing-library/react";
import Reservations from "./Components/ReservationPage/Reservationpage.jsx"
import { MemoryRouter } from "react-router";
import { initialiseTimes } from "./Components/ReservationPage/Reservationpage.jsx";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { submitAPI } from "./API.js";

test('should render logo in Header', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const logo = screen.getByText("Little Lemon");
    expect(logo).toBeInTheDocument();
})

test('should render nav items in Header', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const menu = screen.getByText("Menu");
    const reservations = screen.getByText("Reservations");
    const Contact = screen.getByText("Contact");
    const About = screen.getByText("About");
    expect(menu).toBeInTheDocument();
    expect(reservations).toBeInTheDocument();
    expect(Contact).toBeInTheDocument();
    expect(About).toBeInTheDocument();
})

test('should render logo Footer', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    const logo = screen.getByTestId("footerImage");
    expect(logo).toBeInTheDocument();
})

test('should render heading on reservations page', () => {
    render(<MemoryRouter><Reservations /></MemoryRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('should return an array when initialiseTimes is called', () => {
    let date = "2021-01-01"
    expect(initialiseTimes(new Date(date))).toBeInstanceOf(Array);
})

test('should return true if form data is submitted', () => {
    let formData = {
        firstName: 'User',
        lastName: 'Test',
        email: 'user@test.com',
        date: new Date(),
        time: '17:00',
        numberOfPeople: '3',
        occasion: 'Birthday'
    };
    expect(submitAPI(formData)).toBe(true);
})