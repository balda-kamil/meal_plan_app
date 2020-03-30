import React from 'react'
import './Navbar.css'
import NavbarSingleLink from './NavbarSingleLink/NavbarSingleLink'
import NavbarUserRightContainer from './NavbarUserRightContainer/NavbarUserRightContainer'
import { slide as HamburgerMenu } from 'react-burger-menu'

function Navbar(props){
  console.log(props)
  return(
    <div className="nav__container">
      <nav>
        <HamburgerMenu>
          <NavbarSingleLink linkTo="/" text="Dashboard" className="menu-item"/>
          <NavbarSingleLink linkTo="/recipies" text="Recipies" className="menu-item"/>
          <NavbarSingleLink linkTo="/challenge" text="Challenge" className="menu-item"/>
        </HamburgerMenu>
      <ul className="nav__links">
        <NavbarSingleLink linkTo="/" text="Dashboard"/>
        <NavbarSingleLink linkTo="/recipies" text="Recipies"/>
        <NavbarSingleLink linkTo="/challenge" text="Challenge"/>
      </ul>
        <NavbarUserRightContainer/>
      </nav>
    </div>
  )
}

export default Navbar