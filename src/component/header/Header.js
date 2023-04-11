import React from 'react'
import './Header.css'
import CTA from './CTA'
import Headersocial from './Headersocial'
import image from './image.JPG'
function Header() {
  return (
    <div>
      <div className='container header_container'>
      <div  className='a1'>
        <h4>Hello I'm</h4>
        <h1>Jay Bidwai</h1>
        <h4>Fullstack Developer</h4>
        <CTA/>
        </div>


        <div  className='a2' >
<div className='a3'>

        <Headersocial/>
</div>

        <div className='me'>
          <img src={image} alt="loading ..." />
        </div>

        <div>

        <a href="#contact" className='scroll_down'  >Scroll Down</a>
        </div>

        </div>



      </div>
    </div>
  )
}

export default Header
