import React, { useContext } from 'react'
import { ContainerTheme } from './style'
import ThemeContext from '../../context/ThemeContext'

export const ToggleTheme = () => {
   const { isDark, toggleTheme } = useContext(ThemeContext)

   const handleClick = () => {
      toggleTheme()
   }

   return (
      <ContainerTheme>
         <input className="toggle-checkbox" type="checkbox" onClick={handleClick} defaultChecked={isDark}></input>
         <div className="toggle-slot">
            <div className="sun-icon-wrapper">
               <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
            </div>
            <div className="toggle-button"></div>
            <div className="moon-icon-wrapper">
               <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
            </div>
         </div>
      </ContainerTheme>
   )
}
