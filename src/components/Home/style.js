import styled from 'styled-components'

export const SectionHome = styled.section`
   margin-top: 100px;
   margin-bottom: 100px;
`

export const ImgHome = styled.img`
   width: 40%;
   position: absolute;
   top: 50px;
   right: 0;
   z-index: -1;
`

export const HomeIntro = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: calc(80vh - 100px);

   @media (max-width: 600px) {
      flex-direction: column;
   }
`

export const HomeText = styled.div`
   color: #414141;
   margin-bottom: 10px;
   width: 50%;

   @media (max-width: 600px) {
      width: 100%;
      text-align: center;
   }
`

export const SmallParagraph = styled.p`
   font-size: 18px;
   margin: 0;
`

export const HomeTitle = styled.h1`
   font-size: 3em;
   margin: 0;
   font-weight: 900;
   margin-bottom: 5px;
`

export const TightParagraph = styled.p`
   font-size: 1.4em;
   margin: 0;
`

export const ContainerButtonCv = styled.div`
   margin-top: 40px;
`

export const ImgHero = styled.img`
   width: 50%;

   @media (max-width: 600px) {
      width: 100%;
   }
`
