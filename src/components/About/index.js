import React, { useContext } from 'react'
import { AboutSection, CirculeAbout, AboutSectionContainer, AboutImg, AboutText, Paragraph } from './style'
import { Title } from '../Title'
import profile from '../../static/images/profile.jpg'
import circle from '../../static/images/circle.svg'
import ThemeContext from '../../context/ThemeContext'

export const About = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <AboutSection id="about">
         <div className="text-center">
            <Title label="Sobre mi" />
         </div>
         <CirculeAbout src={circle} alt="circle about" loading="lazy" />
         <div className="container">
            <AboutSectionContainer>
               <div className="image-div">
                  <AboutImg src={profile} alt="Foto sobre mí" loading="lazy" />
               </div>
               <AboutText>
                  <Paragraph theme={isDark}>
                     Hola, soy Diego Rambao, un amante del café☕, un apasionado desarrollador de software autodidacta de
                     Colombia, Con una sólida formación educativa en tecnología de la información 💻. También estoy interesado en
                     el diseño UX/UI.
                  </Paragraph>
                  <Paragraph theme={isDark}>
                     Soy un entusiasta de JavaScript, extremadamente apasionado por la codificación. Me encanta aprender cosas
                     nuevas todos los días y estar al día con las nuevas tecnologías💙.
                  </Paragraph>
               </AboutText>
            </AboutSectionContainer>
         </div>
      </AboutSection>
   )
}
