import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img  className='p_i' src="https://i.pinimg.com/736x/31/4f/35/314f35187d9a22c48492ea61f09c8435.jpg" alt="loading..."/>
            </div>
            <h3> Wallet App Exploration</h3> 
            <div   className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/shots/9709661-Wallet-App-Exploration?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=Wallet+App+Exploration&utm_medium=Social_Share" className='btn btn-primary' target="_blank">Live Demo</a>          

            </div>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img  className='p_i'src="https://i.pinimg.com/originals/a7/18/c2/a718c20cf3b10317f446b6904b122742.png" alt="loading..."/>
            </div>
            <h3>Sila Mobile App design</h3>
            <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/shots/20202390-Sila-Mobile-App-design-iOS-Android-ux-ui-designer" className='btn btn-primary' target="_blank">Live Demo</a>          

            </div>
        </article>



        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img className='p_i' src="https://i.pinimg.com/736x/07/62/cb/0762cbefdc3b5b6bb3a14dfe9a3034e2.jpg" alt="loading..."/>
            </div>
            <h3>Finance Dark theme Design</h3>
            <div  className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/shots/18427655-Finance-Dark-theme-Design" className='btn btn-primary' target="_blank">Live Demo</a>          

            </div>
        </article>



        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img className='p_i' src="https://i.pinimg.com/736x/43/82/04/438204907071f9f656f5e3f760d73ccb.jpg" alt="loading..."/>
            </div>
            <h3>Course web app</h3>
            <div  className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/shots/11944612-Course-web-app" className='btn btn-primary' target="_blank">Live Demo</a>          

            </div>
        </article>



        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img className='p_i' src="https://i.pinimg.com/736x/05/98/7f/05987f16d96daf2abdf6ce8a160a94f6.jpg" alt="loading..."/>
            </div>
            <h3>Travel UI Elements Dark Theme</h3>
            <div className="portfolio_item_cta">

            <a href="https://github.com/" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/shots/14880378-Travel-UI-Elements-Dark-Theme?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=Travel+UI+Elements+Dark+Theme&utm_medium=Social_Share" className='btn btn-primary' target="_blank">Live Demo</a>          

            </div>
        </article>




        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img className='p_i' src="https://i.pinimg.com/736x/15/96/df/1596dfd73907abab5ec2abfeca5789d5--dark-dashboard-web-dashboard.jpg" alt="loading..."/>
            </div>
            <h3>Finance & HR System Dashboard Design</h3>
             <div  className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/shots/18326699-Finance-HR-System-Dashboard-Design" className='btn btn-primary' target="_blank">Live Demo</a>          

            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
