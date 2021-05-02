import React, { Fragment, useContext } from 'react'
import { HomePage } from './pages/'
import GlobalStyle from './globalStyles'
import ThemeContext from './context/ThemeContext'

export const App = () => {
   const { isDark } = useContext(ThemeContext)
   return (
      <Fragment>
         <GlobalStyle theme={isDark} />
         <HomePage />
      </Fragment>
   )
}
