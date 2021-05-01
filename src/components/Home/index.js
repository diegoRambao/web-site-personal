import React from 'react'
import './style.css'
import rect from '../../static/images/rect.svg'
import webdev from '../../static/images/web-development.svg'
import { Button } from '../Button'

export const Home = () => {
   return (
      <section className="home">
         <img src={rect} className="img-home" />
         <div className="container">
            <div className="home-intro">
               <div className="home-text">
                  <p>Hola soy</p>
                  <h1>DIEGO RAMBAO</h1>
                  <p className="adjust">DESARROLLADOR WEB CREATIVO </p>
                  <div className="button-cv">
                     <Button label="Descargar CV" />
                  </div>
               </div>
               <img className="img-hero" src={webdev} />
            </div>
         </div>
      </section>
   )
}
