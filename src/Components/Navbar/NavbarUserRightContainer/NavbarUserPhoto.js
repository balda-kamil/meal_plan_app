import React from "react"

function NavbarUserPhoto(props) {
  const { imgSrc, alt } = props
  return <img src={imgSrc} alt={alt} />
}

export default NavbarUserPhoto
