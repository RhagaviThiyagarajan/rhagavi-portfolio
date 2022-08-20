import React ,{useContext}from "react";
import './Work.css';




import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition=
  {
    duration:1,
    type:'spring',
  }
  return (
    <div className="works">
      <div className="awesome">
        <span style={{color:darkMode?'white':""}}>Technical Skills</span>
        <span></span>
        <spane>
          Lorem ipsum dolor sit, amet consectetur est dignissimos, d expedita
          sequi quidem, excepturi aliquid, natus
          <br />
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
            repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
        </spane>

        <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
        <div
         className="blur s-blurl"
          style={{ background: "#ABF1FF94" }}>

          </div>
      </div>

{/*right*/}

<div className="works">
  {/* <div className="w-mainCircle">
  <div className="w-secCircle"> */}
<div className="awesome">


      
<span> </span>
        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        >Summary</motion.div>
        <spane>
          Lorem ipsum dolor sit, amet consectetur est dignissimos, d expedita
          sequi quidem, excepturi aliquid, natus
          <br />
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
          repellat blanditiis vitae ipsam iusto amet.
          <br/>
            repellat blanditiis vitae ipsam iusto amet.
          <br/>
        </spane>






 <div className="w-backCircle blueCircle"></div>
<div className="w-backCircle yellowCircle"></div>

      </div>
      </div>
      </div>
      // </div>
      //  </div> 
    
   
  );
}

export default Work;
