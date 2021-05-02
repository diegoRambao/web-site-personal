import React, { useContext } from 'react'
import { Title } from '../Title'
import { SectionSkill, ContainerSkill, IconSkill, ContainerSkillWords, SkillWord } from './style'
import html from '../../static/images/html.svg'
import js from '../../static/images/js.svg'
import node from '../../static/images/node.svg'
import react from '../../static/images/react.svg'
import ThemeContext from '../../context/ThemeContext'

const listOfSkillsMeasures = [
   { top: '50px', left: '100%', fontSize: '23px', label: 'Css' },
   { top: '119px', left: '41px', fontSize: '26px', label: 'Express' },
   { top: '-37px', left: '0px', fontSize: '16px', label: 'Laravel' },
   { top: '-225px', left: '143px', fontSize: '22px', label: 'MySql' },
   { top: '-93px', left: '225px', fontSize: '12px', label: 'Flutter' },
   { top: '-257px', left: '80%', fontSize: '25px', label: 'Angular' },
   { top: '-81px', left: '475px', fontSize: '19px', label: 'Figma' },
   { top: '185px', left: '343px', fontSize: '14px', label: 'Git' },
   { top: '119px', left: '70%', fontSize: '19px', label: 'TypeScript' },
   { top: '-110px', left: '100%', fontSize: '12px', label: 'Ionic' },
   { top: '-292px', left: '371px', fontSize: '15px', label: 'Invision' },
   { top: '-58px', left: '100%', fontSize: '15px', label: 'Bootstrap' },
   { top: '200px', left: '60%', fontSize: '26px', label: 'ES6' },
]

export const Skill = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <SectionSkill>
         <div className="text-center">
            <Title label="My Skillsets" />
         </div>
         <div className="container relative">
            <ContainerSkill>
               <IconSkill src={html} alt="Icon html" loading="lazy" />
               <IconSkill src={js} alt="Icon html" loading="lazy" />
               <IconSkill src={node} alt="Icon html" loading="lazy" />
               <IconSkill src={react} alt="Icon html" loading="lazy" />
            </ContainerSkill>
            <ContainerSkillWords>
               {listOfSkillsMeasures.map((skillWord, index) => (
                  <SkillWord {...skillWord} key={index} theme={isDark}>
                     {skillWord.label}
                  </SkillWord>
               ))}
            </ContainerSkillWords>
         </div>
      </SectionSkill>
   )
}
