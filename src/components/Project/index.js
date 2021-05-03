import React, { useContext } from 'react'
import { SectionProject, ContainerProjects, OtherProjects } from './style'
import ThemeContext from '../../context/ThemeContext'
import { Title } from '../Title'
import { ProjectRow } from '../ProjectRow'
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
            <ProjectRow
               reverse={false}
               theme={isDark}
               link="/project"
               img={project_task}
               title="Lista de tareas"
               desription="Con esta app podrás organizar todas tus ideas y planear tus próximos proyectos, con el fin de..."
            />

            <ProjectRow
               reverse={true}
               theme={isDark}
               link="/project"
               img={project_guappjolotas}
               title="Guappjolotas"
               desription="Nada como una Guajolota para empezar el día. Disfruta del diseño de esta bonita y completa..."
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
