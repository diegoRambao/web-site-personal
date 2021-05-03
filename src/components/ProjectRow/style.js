import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 7rem;
   gap: 50px;
   flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

   @media (max-width: 700px) {
      flex-direction: column;
      gap: 10px;
   }
`

export const WraperImg = styled.div`
   perspective: 30px;
   margin-bottom: 0;
   flex: 1 1 auto;
   width: 56%;

   @media (max-width: 700px) {
      width: 100%;
   }
`

export const Image = styled.img`
   width: 100%;
   border-radius: 1rem;
   box-shadow: 2px 2px 50px rgb(0 0 0 / 15%);
   transition: transform 0.5s;

   &:hover {
      transform: rotateX(0.07deg) rotateY(-0.3deg);
   }
`

export const ContainerText = styled.div`
   width: 44%;
   text-align: left;
   flex: 1 1 auto;
   line-height: 1;

   @media (max-width: 700px) {
      width: 100%;
      text-align: center;
   }
`

export const Title = styled.h3`
   margin-bottom: 0.5rem;
   font-size: 1.6rem;
   font-weight: 700;
   color: ${(props) => (props.theme === true ? '#f8f8f8' : '#414141')};
`

export const Description = styled.p`
   color: ${(props) => (props.theme === true ? '#f8f8f8' : '#5a5a5a')};
   line-height: 1.4;
   font-size: 0.9rem;
   margin-bottom: 1rem;
`

export const ProjectLink = styled.div`
   margin-top: 16px;
`
