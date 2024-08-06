import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Ticket from './components/Ticket';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tickets' element={<Ticket />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
