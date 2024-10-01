import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Crop from './Crop'
import Fertilizer from './Fertilizer'


function App() {

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crop" element={<Crop />} />
            <Route path="/fertilizer" element={<Fertilizer />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
