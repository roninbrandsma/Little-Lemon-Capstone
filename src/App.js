import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router';
import Header from "./Components/Header/Header";
import HomePage from './Components/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import Reservation from './Components/ReservationPage/Reservationpage';
import ContactPage from './Components/ContactPage/Contactpage';
import Confimation from './Components/ConfimationPage/Confirmationpage';

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