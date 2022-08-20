
import './App.css';
import React from 'react';

import Services from "./services/Services"
import Navbar from "./components/Navbar/Navbar.jsx"
import Intro from './components/intro/Intro.jsx';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer.jsx';
import Toggle from './components/Toggle/Toggle.jsx';
import { themeContext } from './Context';
import {useContext} from 'react';


function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{background:darkMode?'black':'white',
    color:darkMode ?'white':''}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
    <Work/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
  <Toggle/>

    </div>
  );
}

export default App;
