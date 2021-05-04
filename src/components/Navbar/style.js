import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Nav = styled.nav`
   padding: 0.7rem;
   position: fixed;
   background-color: ${(props) => (props.theme === true ? '#2f2f2f' : '#fff')};
   box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
   top: 0;
   width: 100vw;
   z-index: 1000;
`

export const NavbarBrand = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const NavbarImg = styled.img`
   width: 2.5rem;
`

export const NavbarItems = styled.div`
   display: flex;
   gap: 1.875rem;

   @media (max-width: 600px) {
      display: none;
   }
`

export const ItemNav = styled(AnchorLink)`
   color: ${(props) => (props.themedark ? '#f8f8f8' : '#5340ff')};
   font-weight: 600;
   text-decoration: none;
   font-size: 0.9375em;
`
