import React, { useContext } from 'react'
import { Nav, NavbarBrand, NavbarImg, NavbarItems, ItemNav } from './style'
import { ToggleTheme } from '../ToggleTheme'
import ThemeContext from '../../context/ThemeContext'
import logo from '../../static/images/logo.svg'

export const Navbar = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <Nav theme={isDark}>
         <div className="container">
            <NavbarBrand>
               <NavbarImg src={logo} alt="Logo brand" loading="lazy" />
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <NavbarItems>
                     <ItemNav href="/home">Home</ItemNav>
                     <ItemNav href="/about">About me</ItemNav>
                     <ItemNav href="/project">Projects</ItemNav>
                     <ItemNav href="/contact">Contact</ItemNav>
                  </NavbarItems>
                  <ToggleTheme />
               </div>
            </NavbarBrand>
         </div>
      </Nav>
   )
}
