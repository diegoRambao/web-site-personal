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
                     <ItemNav href="#home" themedark={isDark ? 1 : 0} offset="100">
                        Home
                     </ItemNav>
                     <ItemNav href="#about" themedark={isDark ? 1 : 0} offset="100">
                        About me
                     </ItemNav>
                     <ItemNav href="#project" themedark={isDark ? 1 : 0} offset="100">
                        Projects
                     </ItemNav>
                     <ItemNav href="#contact" themedark={isDark ? 1 : 0} offset="100">
                        Contact
                     </ItemNav>
                  </NavbarItems>
                  <ToggleTheme />
               </div>
            </NavbarBrand>
         </div>
      </Nav>
   )
}
