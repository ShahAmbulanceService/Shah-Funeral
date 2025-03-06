import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import whatsappIcon from './images/whatsappIcon.webp'; // WhatsApp avatar image
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import callIcon from './images/callIcon.png'
import Marquee from './components/Marquee';
// Lazy load the pages
const Homepage = React.lazy(() => import('./components/Homepage'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const ServicePage = React.lazy(() => import('./components/ServicesPage'));
const FaqPage = React.lazy(() => import('./components/FaqPage'));

function App() {
  return (
    <>
      <Router>
        <Marquee />
        <Navbar />
        {/* Suspense to handle the lazy loading of components */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </React.Suspense>

        {/* Footer with padding */}
        <Footer className="pb-24" />
      </Router>

      {/* Call and WhatsApp Button Section */}
      <div className="fixed bottom-4 left-4 right-4 z-50 px-4 py-2 rounded-lg">
        <div className="flex items-center justify-between space-x-4">
          {/* Call Button */}
          <a
            href="tel:+919619400500"
            className="flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 px-4 sm:px-6 text-sm sm:text-lg font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none w-full sm:w-auto"
            aria-label="Call Shah Funeral Service"
          >
            <img src={callIcon} alt="Call Icon" className="w-5 h-5 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+919619500600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500 text-white py-3 px-4 sm:px-6 text-sm sm:text-lg font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none w-full sm:w-auto"
            aria-label="WhatsApp Shah Funeral Service"
          >
            <img src={whatsappIcon} alt="WhatsApp Icon" className="w-5 h-5 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
