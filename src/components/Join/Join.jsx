import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css'
const Join = () => {
    const form= useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gyoqmlk', 'template_8f092qe', form.current, 'eDRwYdQYUNXcEeOPB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="text" name="user_email" placeholder='Enter Your Email to Join us' />
                <button className='btn btn-j'>Join Us</button>
            </form>
          
        </div>
    </div>
  )
}

export default Join