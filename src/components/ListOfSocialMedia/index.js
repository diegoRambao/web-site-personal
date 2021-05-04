import React from 'react'
import { ContainerSocial, LinkSocial } from './style'
import { Twitter, Instagram, Linkedin, GitHub } from 'react-feather'

export function ListOfSocialMedia({ color }) {
   return (
      <ContainerSocial>
         <LinkSocial href="https://twitter.com/DiegoRambao" color={color} target="_blank">
            <Twitter />
         </LinkSocial>
         <LinkSocial href="https://www.linkedin.com/in/diego-rambao/" color={color} target="_blank">
            <Linkedin />
         </LinkSocial>
         <LinkSocial href="https://github.com/diegoRambao" color={color} target="_blank">
            <Instagram />
         </LinkSocial>
         <LinkSocial href="https://www.instagram.com/diegorambao/" color={color} target="_blank">
            <GitHub />
         </LinkSocial>
      </ContainerSocial>
   )
}
