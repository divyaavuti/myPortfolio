import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once when the section is in view
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;