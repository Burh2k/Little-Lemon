import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home_sec from './Components/Home_section';
import Navbar from "./Components/Header.jsx";
import Menu from "./Components/Menu.jsx";
import Review from "./Components/Review.jsx";
import Reservation from "./Components/Reservation/Reservation.jsx";
import About from "./Components/About/About.jsx";
import Pagefooter from "./Components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_sec />} />
          <Route path="/home" element={<Home_sec />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer_reviews" element={<Review />} />
        </Routes>
        <Pagefooter />
      </Router>
    </>
  );
}