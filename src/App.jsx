import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

import Home from './components/Home/Home'
import VideoServices from './components/VideoServices/VideoServices.jsx'
import PhoneServices from './components/PhoneServices/PhoneServices'
import PersonServices from './components/PersonServices/PersonServices'
import Career from './components/Career/Career'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/Signup/Signup'

function App() {
  return (
    <Router>
      <AuthProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
