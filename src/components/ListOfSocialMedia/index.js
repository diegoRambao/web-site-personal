import React from 'react'
import { ContainerSocial, LinkSocial } from './style'
import { Twitter, Instagram, Linkedin, GitHub } from 'react-feather'

export function ListOfSocialMedia({ color }) {
   return (
      <ContainerSocial>
         <LinkSocial href="/project" color={color}>
            <Twitter />
         </LinkSocial>
         <LinkSocial href="/project" color={color}>
            <Linkedin />
         </LinkSocial>
         <LinkSocial href="/project" color={color}>
            <Instagram />
         </LinkSocial>
         <LinkSocial href="/project" color={color}>
            <GitHub />
         </LinkSocial>
      </ContainerSocial>
   )
}
