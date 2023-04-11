import React , { useRef }from 'react'
import './Contact.css'

import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import emailjs from '@emailjs/browser';

function Contact() {
  const call=()=>{
    alert("Thanks for sending Message")
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fdcnv8t', 'template_yduus41', form.current, '3pdXufHCVrIc1yie5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }
 
  return (
    <>
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container  contact_container'>
        <div className='contact_options'> 
        <article className='contact_option'>
         <HiOutlineMail className='contact_option_icon'/>
          <h4>Email</h4>
          <h5>jaybidwai1@gmail.com</h5>
          <a href="mailto:jaybidwai1@gmail.com" target="_blank">Send a message</a>
         </article>


         <article className='contact_option'>
          <BsWhatsapp className='contact_option_icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9325612795</h5>
          <a href="https://wa.me/+919325612795" target="_blank">Send a message</a>
         </article>

        </div>

        <div >
          <form  ref={form} onSubmit={sendEmail}>
            <input type="text"   name="name"   placeholder="Full Name" required className='contact_color'/>
            <input type="email"  name="email"  placeholder="Email id" required className='contact_color'/>
            <textarea placeholder='Your Message' name="message" required rows="6" className='contact_color'/>
            <button type="submit" className='btn btn-primary' onClick={call}><b>Send Message</b></button>
          </form>

        </div>


      </div>
    </section>
    
    
    </>
    
  )
}

export default Contact
