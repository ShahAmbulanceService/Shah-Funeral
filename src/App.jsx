import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import whatsappIcon from './images/whatsappIcon.webp'; // WhatsApp avatar image
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import ServicePage from './components/ServicesPage';

// Import the call icon image
import callIcon from './images/callIcon.png';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<ServicePage />} />
          {/* other routes */}
        </Routes>
        {/* Add bottom padding to ensure footer visibility */}
        <div className="pb-24">
          <Footer />
        </div>
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
