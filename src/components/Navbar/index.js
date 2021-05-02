import React from 'react'
import logo from '../../static/images/logo.svg'
import { Nav, NavbarBrand, NavbarImg, NavbarItems, ItemNav } from './style'

export const Navbar = () => {
   return (
      <Nav>
         <div className="container">
            <NavbarBrand>
               <NavbarImg src={logo} alt="Logo brand" loading="lazy" />
               <NavbarItems>
                  <ItemNav href="/home">Home</ItemNav>
                  <ItemNav href="/about">About me</ItemNav>
                  <ItemNav href="/project">Projects</ItemNav>
                  <ItemNav href="/contact">Contact</ItemNav>
               </NavbarItems>
            </NavbarBrand>
         </div>
      </Nav>
   )
}
