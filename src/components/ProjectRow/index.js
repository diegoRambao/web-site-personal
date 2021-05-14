import React from 'react'
import { Button } from '../Button'
import { Container, ContainerText, WraperImg, Image, Title, Description, ProjectLink } from './style'

export const ProjectRow = ({ theme, link, img, title, desription, reverse }) => {
   return (
      <Container reverse={reverse}>
         <WraperImg>
            <Image src={img} alt={title} />
         </WraperImg>
         <ContainerText>
            <Title theme={theme}>{title}</Title>
            <Description theme={theme}>{desription}</Description>
            <ProjectLink>
               <Button label="Ver proyecto" link={link} />
            </ProjectLink>
         </ContainerText>
      </Container>
   )
}
