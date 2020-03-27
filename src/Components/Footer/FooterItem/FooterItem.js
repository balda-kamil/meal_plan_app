import React from 'react'
import './FooterItem.css'

function FooterItem(props){
  const { title,
          text,
          buttonOne,
          buttonOneText,
          buttonOneLogo,
          buttonTwo,
          buttonTwoText,
          buttonTwoLogo } = props
  return(
    <div>
      { title && <h6>{ title }</h6> }
      { text && <p>{ text }</p> }
      { buttonOne && 
        <button>
          { buttonOneText } 
          { buttonOneLogo && <img src={ buttonOneLogo } alt={ buttonOneText } /> }
        </button> }
      { buttonTwo && 
        <button>
          { buttonTwoText } 
          { buttonTwoLogo && <img src={ buttonTwoLogo } alt={ buttonTwoText } /> }
        </button> }
    </div>
  )
}

export default FooterItem