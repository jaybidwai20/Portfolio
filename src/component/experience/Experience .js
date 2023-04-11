import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
function Experience () {
  return (
    <>
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>frontend development</h3>
          <div className='experience_content'>

         
          <article className='experienced_details'>
            <BsFillPatchCheckFill  className='experienced_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small>Experienced</small>
            </div>
         </article>

         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
           <div> 
            <h4>Bootstrap</h4>
            <small>Experienced</small></div>
         </article>


         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
           <div>
           <h4>CSS</h4>
            <small>Intermidate</small>
           </div>
         </article>


         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small>Experienced</small>
            </div>


         </article><article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
           <div>
           <h4>Tailwind</h4>
            <small>Experienced</small>
           </div>
         </article>

         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
            <div>
            <h4>React</h4>
            <small>Experienced</small>
            </div>
         </article>


         </div>

        </div>
        <div className='experience_backend'>
        <h3>Backend development</h3>
        <div className='experience_content'>

       
          <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
           <div>
           <h4>Node JS</h4>
            <small>Experienced</small>
           </div>
         </article>

         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
           <div>
           <h4>MongoDB</h4>
            <small>Intermidate</small>
           </div>
         </article>


         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
            <div>
            <h4>Express</h4>
            <small>Experienced</small>
            </div>
         </article>


         <article className='experienced_details'>
            <BsFillPatchCheckFill className='experienced_details-icon'/>
          <div>
          <h4>C++</h4>
            <small>Experienced</small>
            </div>
          </article>

          </div>
        </div>

      </div>

    </section>
      
    </>
  )
}

export default Experience 
