import styled from 'styled-components'

export const SectionProject = styled.section`
   margin-top: 240px;

   @media (max-width: 700px) {
      margin-top: 120px;
   }
`

export const ContainerProjects = styled.div`
   width: 60%;
   margin: 0 auto;
   margin-top: 70px;

   @media (max-width: 700px) {
      width: 90%;
   }
`

export const OtherProjects = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 40px;
   margin-top: 60px;

   @media (max-width: 560px) {
      grid-template-columns: 1fr;
   }
`
