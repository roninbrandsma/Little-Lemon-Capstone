import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router';
import Header from "./Components/Header/header";
import HomePage from './Components/HomePage/homepage';
import Footer from './Components/Footer/footer';
import Reservation from './Components/ReservationPage/Reservationpage';
import ContactPage from './Components/ContactPage/contactpage';
import Confimation from './Components/ConfimationPage/confirmationpage';

function App() {
  return (
    <div className="App">
      <Header data-test-id="header" />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/reservations' element={<Reservation />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/confirmation' element={<Confimation />}></Route>
      </Routes>
      <Footer data-test-id="footer" />
    </div>
  );
}


export default App;