import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/header';
import HomePage from './Components/HomePage/homepage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}


export default App;