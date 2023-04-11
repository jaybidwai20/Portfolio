import React from 'react'
import './ABout.css'

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

        <div className='about_me'>
          <img className='about_img' src="https://i.pinimg.com/736x/30/37/62/3037628e0fdc3323789e1a2bdd417e28.jpg" alt="loading..."/>

        </div>


        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>experience</h5>
              <small>1> years </small>

            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>clients</h5>
              <small>20+ Worldwide</small>

            </article>
            <article className='about_card'>
              <VscFolderOpened className='about_icon'/>
              <h5>projects</h5>
              <small>10+ completed</small>

            </article>

          </div>
          <p className='pk' >I’m a nice fun and friendly person, I’m honest and punctual, I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills. I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>









    </section>
  )
}

export default About
