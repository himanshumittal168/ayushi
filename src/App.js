import './App.css';
import './output.css'
import Navbar from './NavBar';
import React from 'react';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import Achievements from './Achievements';
import Schedule from './Schedule';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 relative">
        <Hero />
        <About />
        <Courses />
        <Achievements />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

