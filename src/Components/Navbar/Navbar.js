import React from 'react'
import './Navbar.css'
import NavbarSingleLink from './NavbarSingleLink'

function Navbar(){
  return(
    <div>
      <ul>
        <NavbarSingleLink linkTo="/" text="Dashboard"/>
        <NavbarSingleLink linkTo="/recipies" text="Recipies"/>
        <NavbarSingleLink linkTo="/challenge" text="Challenge"/>
      </ul>
    </div>
  )
}

export default Navbar