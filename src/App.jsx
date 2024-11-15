import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatar from './images/avatar-whatsapp-icon.jpg'; // Import the avatar image
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import ServicePage from './components/ServicesPage';

// Import the call button image
import callIcon from './images/callIcon.png'; // Save the image locally in your project

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
        <Footer />
      </Router>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        phoneNumber="9920964000"
        accountName="Shah Funeral Service"
        avatar={avatar} // Use the imported avatar here
      />

      {/* Call Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href="tel:9920964000"
          className="flex items-center justify-center w-14 h-14 bg-transparent rounded-full shadow-lg hover:opacity-80"
          aria-label="Call Shah Funeral Service"
        >
          <img
            src={callIcon}
            alt="Call Icon"
            className="w-full h-full object-cover rounded-full"
          />
        </a>
      </div>
    </>
  );
}

export default App;
