import React from 'react'
import './Footer.css'


import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";







function Footer() {
  return (
    <>
    <footer>

    

      <a href='#' className='footer_logo'><b>B_COMPANY</b></a> 
 
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className='footer-social'>
        <a href="https://www.facebook.com/jay.bidwai.1/"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/patilbidwai/"><AiFillInstagram/></a>
        <a href="https://twitter.com/"><AiFillTwitterCircle/></a>
      </div>

      <div className='footer_copyright'>
   <small>&copy;Bcompany. All rights reserved</small>
      </div>


{/* </div> */}
 </footer>


    </>

  )
}

export default Footer
