import React, { useContext } from 'react'
import {
   SectionHome,
   ImgHome,
   HomeIntro,
   HomeText,
   SmallParagraph,
   HomeTitle,
   TightParagraph,
   ContainerButtonCv,
   ImgHero,
} from './style'
import ThemeContext from '../../context/ThemeContext'
import rect from '../../static/images/rect.svg'
import webdev from '../../static/images/web-development.svg'
import { Button } from '../Button'

export const Home = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <SectionHome id="home">
         <ImgHome src={rect} alt="Img home" loading="lazy" />
         <div className="container">
            <HomeIntro>
               <HomeText theme={isDark}>
                  <SmallParagraph>Hola soy</SmallParagraph>
                  <HomeTitle>DIEGO RAMBAO</HomeTitle>
                  <TightParagraph>DESARROLLADOR DE SOFTWARE</TightParagraph>
                  <ContainerButtonCv>
                     <Button label="Descargar CV" />
                  </ContainerButtonCv>
               </HomeText>
               <ImgHero src={webdev} alt="Img Hero" loading="lazy" />
            </HomeIntro>
         </div>
      </SectionHome>
   )
}
