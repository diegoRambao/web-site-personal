import React, { useContext } from 'react'
import { SectionContact, ContainerContact } from './style'
import { Title } from '../Title'
import { ListOfSocialMedia } from '../ListOfSocialMedia'
import { MapPin, Mail, Phone } from 'react-feather'
import ThemeContext from '../../context/ThemeContext'

export const Contact = () => {
   const { isDark } = useContext(ThemeContext)
   const handleSubmit = () => {
      console.log('Submeted...')
   }
   return (
      <SectionContact id="contact">
         <div className="text-center">
            <Title label="Get In Touch" />
         </div>

         <div className="container">
            <ContainerContact theme={isDark}>
               <div className="contact-text">
                  <h2 className="title-contact-info">Contact Info</h2>
                  <p className="contact-info-description">
                     Estoy disponible para trabajar en sus proyectos y dar vida a sus ideas. Estoy a solo un clic de distancia.
                  </p>
                  <p className="contact-info-item">
                     <MapPin /> <span>Barranquillla, Atlantico</span>
                  </p>
                  <p className="contact-info-item">
                     <Mail /> <span>diegoandresrambao@gmail.com</span>
                  </p>
                  <p className="contact-info-item">
                     <Phone /> <span> +57 3003086333</span>
                  </p>
                  <h2 className="title-contact-info">Follow</h2>
                  <ListOfSocialMedia color={isDark ? '#f8f8f8' : '#414141'} />
               </div>

               <form onSubmit={handleSubmit} className="form-contact">
                  <input type="text" name="email" id="email" placeholder="example@gmail.com" className="input-text-contact" />
                  <input type="text" name="name" id="name" placeholder="Juan José" className="input-text-contact" />
                  <textarea name="message" id="message" placeholder="Hey, there!" className="textarea-contact"></textarea>
                  <button className="button-submit-contact">Enviar</button>
               </form>
            </ContainerContact>
         </div>
      </SectionContact>
   )
}
