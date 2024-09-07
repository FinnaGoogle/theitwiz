import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import Consult from './components/ConsultPage';
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';
import './App.css';


function App() {
 
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
