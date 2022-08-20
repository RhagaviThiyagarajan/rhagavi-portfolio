import React, { useContext } from "react";
import "./Services.css";

import HeartEmoji from "./../img/heartemoji.png";
import Glasses from "./../img/glasses.png";
import Humble from "./../img/humble.png";

import Card from "./../components/Card/Card";
import { themeContext } from '../Context';
import {motion} from 'framer-motion';

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition=
  {
    duration:1,
    type:'spring',
  }

  return (
    <div className="services" id="Services">
      {/* left side*/}
      <div className="awesome">
        <span style={{color:darkMode?'white':""}}>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ipsum dolor sit, amet consectetur est dignissimos, d expedita
          sequi quidem, excepturi aliquid, natus
          <br />
          repellat blanditiis vitae ipsam iusto amet.
        </spane>

        <a>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side*/}
      <div className="cards">
        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}>
          <Card
            emoji={HeartEmoji}
            heading={"Tools"}
            detail={"Netlify,Heroku,GIT,Github"}
          />
        </motion.div>

        {/* second card */}

        <motion.div
        initial={{left:'-11rem',
        top:'12rem'}}
        whileInView={{left:'-4rem'}}
        transition={transition}>
        
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"React JS,Node JS,Mongo DB,SQL(basics),Express JS"}
          />
        </motion.div>

        {/*third card*/}
        <motion.div
        initial={{top:'19rem',left:'25rem'}}
        whileInView={{left:'12rem'}}
        transition={transition}>
          
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Html5,CSS3,JavaScript"}
            color="rgba(252, 166,31,0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
