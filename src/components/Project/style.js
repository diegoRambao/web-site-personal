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

export const ProjectRow = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 7rem;
   gap: 50px;

   @media (max-width: 700px) {
      flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
      gap: 10px;
   }
`

export const ProjectWraperImg = styled.div`
   perspective: 30px;
   margin-bottom: 0;
   flex: 1 1 auto;
   width: 56%;

   @media (max-width: 700px) {
      width: 100%;
   }
`

export const ProjectImg = styled.img`
   width: 100%;
   border-radius: 1rem;
   box-shadow: 2px 2px 50px rgb(0 0 0 / 15%);
   transition: transform 0.5s;

   &:hover {
      transform: rotateX(0.07deg) rotateY(-0.3deg);
   }
`

export const ProjectText = styled.div`
   width: 44%;
   text-align: left;
   flex: 1 1 auto;
   line-height: 1;

   @media (max-width: 700px) {
      width: 100%;
      text-align: center;
   }
`

export const ProjectTitle = styled.h3`
   margin-bottom: 0.5rem;
   font-size: 1.6rem;
   font-weight: 700;
   color: ${(props) => (props.theme === true ? '#f8f8f8' : '#414141')};
`

export const ProjectDescription = styled.p`
   color: ${(props) => (props.theme === true ? '#f8f8f8' : '#5a5a5a')};
   line-height: 1.4;
   font-size: 0.9rem;
   margin-bottom: 1rem;
`

export const ProjectLink = styled.div`
   margin-top: 16px;
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
