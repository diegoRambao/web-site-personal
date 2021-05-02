import React from 'react'
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
import rect from '../../static/images/rect.svg'
import webdev from '../../static/images/web-development.svg'
import { Button } from '../Button'

export const Home = () => {
   return (
      <SectionHome>
         <ImgHome src={rect} alt="Img home" loading="lazy" />
         <div className="container">
            <HomeIntro>
               <HomeText>
                  <SmallParagraph>Hola soy</SmallParagraph>
                  <HomeTitle>DIEGO RAMBAO</HomeTitle>
                  <TightParagraph>DESARROLLADOR WEB CREATIVO </TightParagraph>
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
