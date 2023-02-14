import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Header from './components/Header'
import Error from './components/Error/index.jsx'
import Footer from './components/Footer/index.jsx'


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about-us' element={<AboutUs />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
)
