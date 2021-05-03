import React, { useContext } from 'react'
import { FooterContainer } from './style'
import { ListOfSocialMedia } from '../ListOfSocialMedia'
import logo_white from '../../static/images/logo-white.svg'
import ThemeContext from '../../context/ThemeContext'

export const Footer = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <FooterContainer className="container-footer" theme={isDark}>
         <div className="container">
            <img src={logo_white} alt="Logo" className="logo-footer" />
            <p className="footer-Copyright">© Copyright 2021. All right reserved</p>
            <ListOfSocialMedia color="#f8f8f8" />
         </div>
      </FooterContainer>
   )
}
