import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {createGlobalStyle} from 'styled-components'


import Home from './pages/Home/index.jsx'
import AboutUs from './pages/AboutUs/index.jsx'
import Header from './components/Header'
import Error from './components/Error/index.jsx'
import Footer from './components/Footer/index.jsx'
import Fiche from './components/Fiche/index.jsx'
import colors from './utils/style/colors.js'


const fontUrl = `https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;900&display=swap')`;

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Montserrat';
      src:url(${fontUrl});
      font-weight: 300;
      font-style: normal;
    }
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 1.5vw;
      color: ${colors.primary};
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
    }
    .white_txt{
      color: white;
    }
    section{
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
              <Route path='*' element={<Error/>}/>
              <Route path='/fiche/*' element={<Fiche/>}/>
          </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
)
