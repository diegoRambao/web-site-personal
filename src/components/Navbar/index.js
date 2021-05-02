import React from 'react'
import { Nav, NavbarBrand, NavbarImg, NavbarItems, ItemNav } from './style'
import { ToggleTheme } from '../ToggleTheme'
import logo from '../../static/images/logo.svg'

export const Navbar = () => {
   return (
      <Nav>
         <div className="container">
            <NavbarBrand>
               <NavbarImg src={logo} alt="Logo brand" loading="lazy" />
               <div style={{ display: 'flex' }}>
                  <ToggleTheme />
                  <NavbarItems>
                     <ItemNav href="/home">Home</ItemNav>
                     <ItemNav href="/about">About me</ItemNav>
                     <ItemNav href="/project">Projects</ItemNav>
                     <ItemNav href="/contact">Contact</ItemNav>
                  </NavbarItems>
               </div>
            </NavbarBrand>
         </div>
      </Nav>
   )
}
