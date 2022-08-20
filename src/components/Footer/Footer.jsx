import React from 'react'
import './Footer.css';
import Gmail from '@iconscout/react-unicons/icons/uil-mailbox';
import Linkeden from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import wave from '../../img/wave (1).png';

function Footer() {
  return (
    <div className="footer">
        <img src={wave} alt="" 
        style={{width:'100%'}}/>
        <div className="f-content">
            <span>rhagavi3@gmail.com</span>
            <div className="f-icons">
                <Gmail color="white" size='3rem'/>
                <Linkeden color="white" size='3rem'/>
                <Github color="white" size='3rem'/>
            </div>
        </div>
        </div>
  )
}

export default Footer
