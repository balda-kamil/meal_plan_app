import React from 'react'
import './Navbar.css'
import NavbarSingleLink from './NavbarSingleLink/NavbarSingleLink'
import NavbarUserRightContainer from './NavbarUserRightContainer/NavbarUserRightContainer'

function Navbar(){
  return(
    <div className="nav__container">
      <nav>
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