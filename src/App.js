import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/header';
import HomePage from './Components/HomePage/homepage';
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
