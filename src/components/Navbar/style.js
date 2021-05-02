import styled from 'styled-components'

export const Nav = styled.nav`
   padding: 0.7rem;
   background-color: #fff;
   box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
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

export const ItemNav = styled.a`
   color: #5340ff;
   font-weight: 600;
   text-decoration: none;
   font-size: 0.9375em;
`
