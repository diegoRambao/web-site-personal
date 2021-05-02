import React from 'react'
import { Title } from '../Title'
import './style.css'
import html from '../../static/images/html.svg'
import js from '../../static/images/js.svg'
import node from '../../static/images/node.svg'
import react from '../../static/images/react.svg'

export const Skill = () => {
   return (
      <section className="skill">
         <div className="title-skill">
            <Title label="My Skillsets" />
         </div>
         <div className="container relative ">
            <div className="container-skill">
               <img src={html} className="icon-skill" alt="Icon html" />
               <img src={js} className="icon-skill" alt="Icon html" />
               <img src={node} className="icon-skill" alt="Icon html" />
               <img src={react} className="icon-skill" alt="Icon html" />
            </div>
            <div className="container-skills-words">
               <p className="skills-words" style={{ top: '50px', left: '100%', fontSize: '23px' }}>
                  Css
               </p>
               <p className="skills-words" style={{ top: '119px', left: '41px', fontSize: '26px' }}>
                  Express
               </p>
               <p className="skills-words" style={{ top: '-37px', left: '0px', fontSize: '16px' }}>
                  Laravel
               </p>
               <p className="skills-words" style={{ top: '-225px', left: '143px', fontSize: '22px' }}>
                  MySql
               </p>
               <p className="skills-words" style={{ top: '-93px', left: '225px', fontSize: '12px' }}>
                  Flutter
               </p>
               <p className="skills-words" style={{ top: '-257px', left: '80%', fontSize: '25px' }}>
                  Angular
               </p>
               <p className="skills-words" style={{ top: '-81px', left: '475px', fontSize: '19px' }}>
                  Figma
               </p>
               <p className="skills-words" style={{ top: '185px', left: '343px', fontSize: '14px' }}>
                  git
               </p>
               <p className="skills-words" style={{ top: '119px', left: '70%', fontSize: '19px' }}>
                  TypeScript
               </p>
               <p className="skills-words" style={{ top: '-110px', left: '736px', fontSize: '12px' }}>
                  Ionic
               </p>
               <p className="skills-words" style={{ top: '-292px', left: '371px', fontSize: '15px' }}>
                  Invision
               </p>
               <p className="skills-words" style={{ top: '-58px', left: '100%', fontSize: '15px' }}>
                  Bootstrap
               </p>
               <p className="skills-words" style={{ top: '249px', left: '60%', fontSize: '26px' }}>
                  ES6
               </p>
            </div>
         </div>
      </section>
   )
}
