import React, { useContext } from 'react'
import { SectionContact, ContainerContact } from './style'
import { Title } from '../Title'
import { ListOfSocialMedia } from '../ListOfSocialMedia'
import { MapPin, Mail, Phone } from 'react-feather'
import ThemeContext from '../../context/ThemeContext'
import { useForm } from 'react-hook-form'

export const Contact = () => {
   const {
      register,
      formState: { errors },
   } = useForm()
   const { isDark } = useContext(ThemeContext)

   return (
      <SectionContact id="contact">
         <div className="text-center">
            <Title label="Contáctame" />
         </div>

         <div className="container">
            <ContainerContact theme={isDark}>
               <div className="contact-text">
                  <h2 className="title-contact-info">Contact Info</h2>
                  <p className="contact-info-description">
                     Estoy disponible para trabajar en sus proyectos y dar vida a sus ideas. Estoy a solo un clic de distancia.
                  </p>
                  <p className="contact-info-item">
                     <MapPin /> <span>Barranquillla, Colombia</span>
                  </p>
                  <p className="contact-info-item">
                     <Mail /> <span>diegoandrestrom04@gmail.com</span>
                  </p>
                  <p className="contact-info-item">
                     <Phone /> <span> +57 3003086333</span>
                  </p>
                  <h2 className="title-contact-info">Follow</h2>
                  <ListOfSocialMedia color={isDark ? '#f8f8f8' : '#414141'} />
               </div>

               <form action="https://formspree.io/f/xrgreoaz" method="POST" className="form-contact">
                  <div className="form-control">
                     <label htmlFor="name">Nombre</label>
                     <input
                        {...register('name', { required: true })}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Juan José"
                        className="input-text-contact"
                     />
                     {errors.name?.type && 'El nombre es requerido'}
                  </div>
                  <div className="form-control">
                     <label htmlFor="email">Email</label>
                     <input
                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="input-text-contact"
                     />
                     {errors.email?.type === 'required' && 'El correo es requerido'}
                     {errors.email?.type === 'pattern' && 'Digite un correo valido'}
                  </div>
                  <div className="form-control">
                     <label htmlFor="message">Mensaje</label>
                     <textarea
                        {...register('message', { required: true })}
                        name="message"
                        id="message"
                        placeholder="¡Hey, Hola!"
                        className="textarea-contact"
                     ></textarea>
                     {errors.message?.type && 'El mensaje es requerido'}
                  </div>
                  <button className="button-submit-contact" type="submit">
                     Enviar
                  </button>
               </form>
            </ContainerContact>
         </div>
      </SectionContact>
   )
}
