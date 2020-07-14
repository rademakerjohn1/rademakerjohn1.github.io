import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  return (
  <div>
    <Nav />
    <Header />
    <About />
    <Portfolio />
    <Contact />
  </div>
  );
}

export default App;
