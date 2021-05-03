import React from 'react'
import { OtherProjectsLink, Container, Image, Title, Description } from './style'

export const CardOtherProject = ({ link, theme, img, title, description }) => {
   return (
      <OtherProjectsLink href={link} theme={theme}>
         <Container theme={theme}>
            <Image src={img} alt={title} />
            <Title>{title}</Title>
            <Description>{description}</Description>
         </Container>
      </OtherProjectsLink>
   )
}
