import React, { useState } from 'react'

const ThemeContext = React.createContext({
   isDark: false,
   toggle: () => {},
})

const returnContextBoolean = () => {
   const contextBoolean = window.localStorage.getItem('theme') === 'true' ? true : false
   return contextBoolean
}

export function ThemeContextProvider({ children }) {
   const [isDark, setIsDark] = useState(returnContextBoolean())

   const toggleTheme = () => {
      setIsDark(!isDark)
      window.localStorage.setItem('theme', !isDark)
   }

   return (
      <ThemeContext.Provider
         value={{
            isDark,
            toggleTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeContext
