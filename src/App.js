 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Header from './components/common/Header';

import Footer from './components/common/Footer';

 
import Home from './components/Home/Home';
import VideoServices from './components/VideoServices/VideoServices.jsx';
import PhoneServices from './components/PhoneServices/PhoneServices';
import PersonServices from './components/PersonServices/PersonServices';
import Career from './components/Career/Career';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
 
// import './styles/global.scss';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />
 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<VideoServices />} />
            <Route path="/phone" element={<PhoneServices />} />
            <Route path="/person" element={<PersonServices />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;