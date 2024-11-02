import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatar from './images/avatar-whatsapp-icon.jpg'; // Import the avatar image
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import ServicePage from './components/ServicesPage';

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

      <FloatingWhatsApp
        phoneNumber='9920964000'
        accountName='Shah Funeral Service'
        avatar={avatar} // Use the imported avatar here
      />
    </>
  );
}

export default App;
