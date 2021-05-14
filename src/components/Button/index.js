import React from 'react'
import { ButtonPrimay } from './style'

export const Button = ({ label, link }) => {
   return (
      <ButtonPrimay href={link} target="_blank">
         {label}
      </ButtonPrimay>
   )
}
