import React, { useContext } from 'react'
import { SectionProject, ContainerProjects, OtherProjects } from './style'
import ThemeContext from '../../context/ThemeContext'
import { Title } from '../Title'
import { ProjectRow } from '../ProjectRow'
import { CardOtherProject } from '../CardOtherProject'
import project_porfolio from '../../static/images/thumbnail-porfolio.jpg'
import project_resource from '../../static/images/thumbnail-resource.jpg'
import project_blockmaster from '../../static/images/Thumbnail-blockmaster.jpg'
import project_pets from '../../static/images/Thumbnail-Adopcion.jpg'

export const Project = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <SectionProject id="project">
         <div className="text-center">
            <Title label="Portafolio" />
         </div>
         <ContainerProjects>
            <ProjectRow
               reverse={false}
               theme={isDark}
               link="https://github.com/diegoRambao/web-site-personal"
               img={project_porfolio}
               title="Portafolio Personal"
               desription="Este es un sitio web personal donde se puede ver información sobre mi, mis proyectos y poder contactarme."
            />

            <ProjectRow
               reverse={true}
               theme={isDark}
               link="https://github.com/diegoRambao/resource-app"
               img={project_resource}
               title="Resource App"
               desription="Guarda y busca los recursos que te ayudarán a realizar tu trabajo mucho mas rapido y eficiente."
            />

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
