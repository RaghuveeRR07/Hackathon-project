import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Navbar from './components/Navbar2.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      
      <div>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
