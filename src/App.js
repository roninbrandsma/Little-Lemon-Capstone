import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from './Components/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import Reservation from './Components/ReservationPage/Reservationpage';
import ContactPage from './Components/ContactPage/Contactpage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/reservations' element={<Reservation />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;