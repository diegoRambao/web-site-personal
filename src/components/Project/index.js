import React, { useContext } from 'react'
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
} from './style'
import ThemeContext from '../../context/ThemeContext'
import { Title } from '../Title'
import { Button } from '../Button'
import { CardOtherProject } from '../CardOtherProject'
import project_task from '../../static/images/Thumbnail-ListaDeTareas.jpg'
import project_guappjolotas from '../../static/images/Thumbnail-guappjolotas.jpg'
import project_blockmaster from '../../static/images/Thumbnail-blockmaster.jpg'
import project_pets from '../../static/images/Thumbnail-Adopcion.jpg'

export const Project = () => {
   const { isDark } = useContext(ThemeContext)
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
                  <ProjectTitle theme={isDark}>Lista de tareas</ProjectTitle>
                  <ProjectDescription theme={isDark}>
                     Con esta app podrás organizar todas tus ideas y planear tus próximos proyectos, con el fin de...
                  </ProjectDescription>
                  <ProjectLink>
                     <Button label="Ver proyecto" />
                  </ProjectLink>
               </ProjectText>
            </ProjectRow>

            <ProjectRow reverse={true}>
               <ProjectText>
                  <ProjectTitle theme={isDark}>Guappjolotas</ProjectTitle>
                  <ProjectDescription theme={isDark}>
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
               <CardOtherProject
                  link="/project"
                  theme={isDark}
                  img={project_blockmaster}
                  title="Block Master"
                  description="Block Master es la plataforma de contenido más reciente en el mercado pero a la vez la más..."
               />

               <CardOtherProject
                  link="/project"
                  theme={isDark}
                  img={project_pets}
                  title="PetsApp"
                  description="Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos..."
               />
            </OtherProjects>
         </ContainerProjects>
      </SectionProject>
   )
}
