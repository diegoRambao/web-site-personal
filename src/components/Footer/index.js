import React, { useContext } from 'react'
import { FooterContainer } from './style'
import logo_white from '../../static/images/logo-white.svg'
import { Twitter, Instagram, Linkedin, GitHub } from 'react-feather'
import ThemeContext from '../../context/ThemeContext'

export const Footer = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <FooterContainer className="container-footer" theme={isDark}>
         <div className="container">
            <img src={logo_white} alt="Logo" className="logo-footer" />
            <p className="footer-Copyright">© Copyright 2021. All right reserved</p>
            <div className="footer-socialmedia">
               <a href="/project" className="link-social-media">
                  <Twitter />
               </a>
               <a href="/project" className="link-social-media">
                  <Linkedin />
               </a>
               <a href="/project" className="link-social-media">
                  <Instagram />
               </a>
               <a href="/project" className="link-social-media">
                  <GitHub />
               </a>
            </div>
         </div>
      </FooterContainer>
   )
}
