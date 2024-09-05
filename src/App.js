import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './components/LandingPage';
import Consult from './components/ConsultPage';
import Profile from './components/ProfilePage';
import StorePage from './components/StorePage';
import NavBar from './components/NavBar';  // Import NavBar component
import Footer from './components/Footer';  // Import Footer component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <div>
        <NavBar />  {/* This will always be visible */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/consult" element={loggedIn ? <Consult /> : <Navigate to="/profile" />} />
          <Route 
            path="/profile" 
            element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} 
          />
        </Routes>
        <Footer />  {/* This will always be visible */}
      </div>
    </Router>
  );
}

export default App;