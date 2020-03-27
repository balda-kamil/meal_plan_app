import React from 'react'
import './Footer.css'
import FooterItem from './FooterItem/FooterItem'

const data = [
  {
    title: "Running out of products?",
    text: "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.",
    buttonOne: true,
    buttonOneText: "Buy now",
    number: 1
  },
  {
    title: "Bod·ē Trainer in your pocket",
    text: "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.",
    buttonOne: true,
    buttonOneText: "iOS",
    buttonOneLogo: `${process.env.PUBLIC_URL}/img/apple_logo.png`,
    buttonTwo: true,
    buttonTwoText: "Android",
    buttonTwoLogo: `${process.env.PUBLIC_URL}/img/android_logo.png`,
    number: 2
  },
  {
    title: "Frequently Asked Questions",
    text: "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.",
    buttonOne: true,
    buttonOneText: "Read FAQs",
    number: 3
  }
]

function Footer(){
  return(
    <footer>
      { data.map( item => <FooterItem 
                            title={item.title} 
                            text={item.text} 
                            buttonOne={item.buttonOne}
                            buttonOneText={item.buttonOneText}
                            buttonOneLogo={item.buttonOneLogo}
                            buttonTwo={item.buttonTwo}
                            buttonTwoText={item.buttonTwoText}
                            buttonTwoLogo={item.buttonTwoLogo}
                            key={item.number}
                          /> ) }
    </footer>
  )
}

export default Footer