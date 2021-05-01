import React from 'react'
import { Fragment } from 'react'
import { Navbar } from './../components/Navbar'
import { Home } from './../components/Home'

export const HomePage = () => {
   return (
      <Fragment>
         <Navbar />
         <main>
            <Home />
         </main>
      </Fragment>
   )
}
