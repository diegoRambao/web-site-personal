import styled from 'styled-components'

export const AboutSection = styled.section`
   position: relative;
`

export const CirculeAbout = styled.img`
   position: absolute;
   left: 0;
   bottom: 100px;

   @media (max-width: 900px) {
      display: none;
   }
`

export const AboutSectionContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 40px;
   margin-top: 60px;

   @media (max-width: 900px) {
      flex-direction: column;
   }
`

export const AboutImg = styled.img`
   width: 25rem;
   height: 28rem;
   border-radius: 5px;
   filter: drop-shadow(0 1.6rem 1.6rem rgba(51, 51, 51, 0.25));
   object-fit: cover;

   @media (max-width: 600px) {
      width: 100%;
      height: auto;
   }
`

export const AboutText = styled.div`
   max-width: 35.5rem;
   overflow: hidden;
`

export const Paragraph = styled.p`
   font-weight: 400;
   font-size: 1.2em;
   color: #414141;
   margin-bottom: 2.4rem;
`
