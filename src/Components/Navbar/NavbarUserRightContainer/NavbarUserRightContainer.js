import React from 'react'
import './NavbarUserRightContainer.css'
import NavbarUserPhoto from './NavbarUserPhoto'
import NavbarUserName from './NavbarUserName'

function NavbarUserRightContainer(){
  return(
    <div className="nav__user-right">
      <NavbarUserPhoto imgSrc={`${process.env.PUBLIC_URL}/img/user_photo.svg`} alt="user photo"/>
      <NavbarUserName name="Olivia Wilde"/>
      <img src={`${process.env.PUBLIC_URL}/img/arrow_down.png`} alt="arrow down"/>
    </div>
  )
}

export default NavbarUserRightContainer;