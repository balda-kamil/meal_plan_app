import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarSingleLink(props){
  const {linkTo, text} = props
  return(
    <li>
      <NavLink exact to={ linkTo } activeClassName="nav__link--active"> { text } </NavLink>
    </li>
  )
}

export default NavbarSingleLink