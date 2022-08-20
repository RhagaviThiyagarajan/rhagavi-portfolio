import React from 'react'
import './Toggle.css';

import { themeContext } from '../../Context';
import {useContext} from 'react'
export default function Toggle()
{

const theme=useContext(themeContext);
const darkMode=theme.state.darkMode;

const handleClick = () => {
  // debugger
  theme.dispatch({ type: "toggle" });
};

  return (
    <div className="toggle" onClick={handleClick}> 
     <moon/>
    <sun/>
   
    <div className="t-button"
  
    style={darkMode?{left:'2px'} :{right:'2px'}}>
        </div>
        
</div>
  );

  };                  