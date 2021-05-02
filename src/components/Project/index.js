import React from 'react'
import {
   SectionProject,
   ContainerProjects,
   ProjectRow,
   ProjectImg,
   ProjectText,
   ProjectTitle,
   ProjectDescription,
   ProjectLink,
   ProjectWraperImg,
   OtherProjects,
   OtherProjectsLink,
   CardOtherProject,
   CardOtherProjectTitle,
   CardOtherProjectImg,
   CardOtherProjectDescription,
} from './style'
import { Title } from '../Title'
import { Button } from '../Button'
import project_task from '../../static/images/Thumbnail-ListaDeTareas.jpg'
import project_guappjolotas from '../../static/images/Thumbnail-guappjolotas.jpg'
import project_blockmaster from '../../static/images/Thumbnail-blockmaster.jpg'
import project_pets from '../../static/images/Thumbnail-Adopcion.jpg'

export const Project = () => {
   return (
      <SectionProject>
         <div className="text-center">
            <Title label="Projects" />
         </div>
         <ContainerProjects>
            <ProjectRow>
               <ProjectWraperImg>
                  <ProjectImg src={project_task} alt="Proyecto task" />
               </ProjectWraperImg>
               <ProjectText>
                  <ProjectTitle>Lista de tareas</ProjectTitle>
                  <ProjectDescription>
                     Con esta app podrás organizar todas tus ideas y planear tus próximos proyectos, con el fin de...
                  </ProjectDescription>
                  <ProjectLink>
                     <Button label="Ver proyecto" />
                  </ProjectLink>
               </ProjectText>
            </ProjectRow>

            <ProjectRow className="reverse">
               <ProjectText>
                  <ProjectTitle>Guappjolotas</ProjectTitle>
                  <ProjectDescription>
                     Nada como una Guajolota para empezar el día. Disfruta del diseño de esta bonita y completa...
                  </ProjectDescription>
                  <ProjectLink>
                     <Button label="Ver proyecto" />
                  </ProjectLink>
               </ProjectText>
               <ProjectWraperImg>
                  <ProjectImg src={project_guappjolotas} alt="Proyecto task" />
               </ProjectWraperImg>
            </ProjectRow>

            <OtherProjects>
               <OtherProjectsLink href="/project">
                  <CardOtherProject>
                     <CardOtherProjectImg src={project_blockmaster} alt="blockmaster" />
                     <CardOtherProjectTitle>Block Master</CardOtherProjectTitle>
                     <CardOtherProjectDescription>
                        Block Master es la plataforma de contenido más reciente en el mercado pero a la vez la más...
                     </CardOtherProjectDescription>
                  </CardOtherProject>
               </OtherProjectsLink>

               <OtherProjectsLink href="/project">
                  <CardOtherProject>
                     <CardOtherProjectImg src={project_pets} alt="pets" />
                     <CardOtherProjectTitle>PetsApp</CardOtherProjectTitle>
                     <CardOtherProjectDescription>
                        Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos...
                     </CardOtherProjectDescription>
                  </CardOtherProject>
               </OtherProjectsLink>

               <OtherProjectsLink href="/project">
                  <CardOtherProject>
                     <CardOtherProjectImg src={project_pets} alt="pets" />
                     <CardOtherProjectTitle>PetsApp</CardOtherProjectTitle>
                     <CardOtherProjectDescription>
                        Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos...
                     </CardOtherProjectDescription>
                  </CardOtherProject>
               </OtherProjectsLink>
            </OtherProjects>
         </ContainerProjects>
      </SectionProject>
   )
}
