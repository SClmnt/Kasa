import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {createGlobalStyle} from 'styled-components'


import Home from './pages/Home/index.jsx'
import AboutUs from './pages/AboutUs/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import Fiche from './pages/Fiche/index.jsx'

import Header from './components/Header'
import Footer from './components/Footer/index.jsx'
import colors from './utils/style/colors.js'

import "./fonts/Montserrat-Light.ttf";
import "./index.css"

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 1.5vw;
      color: ${colors.primary};
      list-style: none;
      @media screen and (max-width: 480px) {
        font-size: 3vw;
    }
    }
    body {
      margin: 0;
      width: 100%;
    }
    #root {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin: auto;
    }
    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 90vh;
      @media screen and (max-width: 768px) {
        min-height: 90vh;
    }
    }
    .white_txt {
      color: white;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-bottom: 2.5%;
      text-align: center;
    }
`

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path='/about-us' element={<AboutUs />}/>
              <Route path='/logements/:logisId' element={<Fiche/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
)
