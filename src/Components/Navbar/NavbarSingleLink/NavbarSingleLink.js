import React from 'react'
import { Link } from 'react-router-dom'

function NavbarSingleLink(props){
  const {linkTo, text} = props
  return(
    <li>
      <Link exact to={ linkTo }> { text } </Link>
    </li>
  )
}

export default NavbarSingleLink