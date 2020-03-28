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
          buttonTwoLogo,
          } = props
  return(
   
    <div className="footer__item">
      { title && <h6>{ title }</h6> }
      { text && <p>{ text }</p> }
      { buttonOne && 
        <button>
          { buttonOneLogo && <img src={ buttonOneLogo } alt={ buttonOneText } /> }
          <span>{ buttonOneText }</span>
          <img src={`${process.env.PUBLIC_URL}/img/arrow_right.svg`} alt="arrow right"/>
        </button> }
      { buttonTwo && 
        <button>
          { buttonTwoLogo && <img src={ buttonTwoLogo } alt={ buttonTwoText } /> }
          <span>{ buttonTwoText }</span> 
          <img src={`${process.env.PUBLIC_URL}/img/arrow_right.svg`} alt="arrow right"/>
        </button> }
    </div>
  )
}

export default FooterItem