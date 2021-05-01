import React from 'react'
import './index.css'
import logo from '../../static/images/logo.svg'

export const Navbar = () => {
   return (
      <nav className="nav">
         <div className="container">
            <div className="navbar-nav">
               <div className="nav-brand">
                  <img className="navbar-nav-img" src={logo} alt="Logo brand" />
               </div>
               <div className="nav-items">
                  <a className="item-nav" href="#">
                     Home
                  </a>
                  <a className="item-nav" href="#">
                     About me
                  </a>
                  <a className="item-nav" href="#">
                     Projects
                  </a>
                  <a className="item-nav" href="#">
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </nav>
   )
}
