import React from 'react'
import './style.css'
import profile from '../../static/images/profile.jpg'
import circle from '../../static/images/circle.svg'
import { Title } from '../Title'

export const About = () => {
   return (
      <section className="about-me">
         <Title label="About me" />
         <img src={circle} className="circle-about" alt="circle about" />
         <div className="container">
            <div className="about-section-container">
               <div className="image-div">
                  <img src={profile} className="about-img" alt="Foto sobre mí" />
               </div>
               <div className="about-text">
                  <p>
                     Hi, I'm Anurag Hazra, a passionate self-taught frontEnd web developer from India, currently working at
                     timeless.co as a FrontEnd engineer. I tend to make use of modern web technologies to build websites that look
                     great, feel fantastic, and function correctly. I am especially focusing on Reactjs.
                  </p>
                  <p>
                     I'm also a certified graphic designer from "Ramakrishna Mission Shilpamandira". I also do Graphic and UI
                     designing. Since I love both programming and designing, I'm also interested in creating programmatic designs
                     and creative coding projects.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}
