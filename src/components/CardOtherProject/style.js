import styled from 'styled-components'

export const Image = styled.img`
   width: 100%;
   transform: translateY(-1rem);
   border-radius: 6px;
   box-shadow: 2px 2px 50px rgb(0 0 0 / 15%);
   transition: transform 0.35s;
`

export const OtherProjectsLink = styled.a`
   text-decoration: none;
   color: ${(props) => (props.theme === true ? '#f8f8f8' : '#414141')};

   &:hover ${Image} {
      transform: translateY(-1.8rem);
   }
`

export const Container = styled.div`
   padding: 0 1rem 1.2rem;
   border-radius: 0.5rem;
   background: ${(props) => (props.theme === true ? '#2b2b2b' : '#fff')};
   box-shadow: ${(props) => (props.theme === true ? '0 1.6rem 2.4rem rgb(0 0 0 / 25%);' : '2px 2px 50px rgb(0 0 0 / 15%)')};
   position: relative;
`

export const Title = styled.h3`
   font-size: 1.3rem;
   font-weight: 700;
   margin-bottom: 0;
`

export const Description = styled.p`
   font-size: 1rem;
   margin-top: 6px;
`
