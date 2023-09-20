import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



export default function PortfolioContainer() {
  return (

    <Router>
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );

}