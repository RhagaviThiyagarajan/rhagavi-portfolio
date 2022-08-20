import React,{useState,useContext}from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
export default function Contact() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const form=useRef();
  
   
const [done,setDone]=useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_anix054', 'template_ot3a80b', form.current, '3RbedY6sdUd02K60U')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id="contact">
        <div className="w-left">
            <div className="awesome">

                {/* {/darkMode} */}

                <span style={{color:darkMode?'white':''}}>Get in touch</span>
           
            <span>Contact Me</span>
            <div className="blur s-blur"
             style={{background:"#ABF1FF94"}}>

             </div>
            </div>
        </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text"
             name="user_name" 
            className="user"
            placeholder='Name'>
                </input>

                <input type="email"
                 name="email" 
            className="user"
            placeholder='Email'>
                </input>

                <textarea type="message" 
                name="user_message" 
            className="user"
            placeholder='Message'>
                </textarea>

                <input type="submit"
                value="Send"
                className="button/">

                </input>
                 <span>{done && "Thanks for Contacting me"}</span>



                <div className="blur c-blurl" 
                style={{background:"var(--purple)"}}>

                </div>
                </form>
                </div>
                </div>
  );
};
