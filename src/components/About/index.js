import React from 'react'
import { AboutSection, CirculeAbout, AboutSectionContainer, AboutImg, AboutText, Paragraph } from './style'
import { Title } from '../Title'
import profile from '../../static/images/profile.jpg'
import circle from '../../static/images/circle.svg'

export const About = () => {
   return (
      <AboutSection>
         <div className="text-center">
            <Title label="About me" />
         </div>
         <CirculeAbout src={circle} alt="circle about" loading="lazy" />
         <div className="container">
            <AboutSectionContainer>
               <div className="image-div">
                  <AboutImg src={profile} alt="Foto sobre mí" loading="lazy" />
               </div>
               <AboutText>
                  <Paragraph>
                     Hi, I'm Anurag Hazra, a passionate self-taught frontEnd web developer from India, currently working at
                     timeless.co as a FrontEnd engineer. I tend to make use of modern web technologies to build websites that look
                     great, feel fantastic, and function correctly. I am especially focusing on Reactjs.
                  </Paragraph>
                  <Paragraph>
                     I'm also a certified graphic designer from "Ramakrishna Mission Shilpamandira". I also do Graphic and UI
                     designing. Since I love both programming and designing, I'm also interested in creating programmatic designs
                     and creative coding projects.
                  </Paragraph>
               </AboutText>
            </AboutSectionContainer>
         </div>
      </AboutSection>
   )
}
