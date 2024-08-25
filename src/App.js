import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import EventDetails from './components/EventDetails'; // Import EventDetails component
import Team from './components/Team';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Events />
              <Team />
              <Footer />
            </>
          } 
        />
         {/* About Us route */}
         <Route path="/about-us" element={<AboutUs />} />
        {/* Events listing route */}
        <Route path="/events" element={<Events />} />
        {/* Event details route */}
        <Route path="/events/:id" element={<EventDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
