import React, { Component } from 'react';
import './TypeOfFoodOptions.css'
import TypeOfFoodButtonChange from './TypeOfFoodButtonChange'

class TypeOfFoodOptions extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
      { 
        id: 1,
        disabled: true 
      },
      { 
        id: 2,
        disabled: true 
      },
      { 
        id: 3,
        disabled: true 
      },
      { 
        id: 4,
        disabled: false
       },
      { 
        id: 5,
        disabled: false
       }
      ]
    }
  }

  handleClick = optionId => {
    console.log(optionId)
    this.setState(prevState => ({
      options: prevState.options.map(
        option => option.id === optionId ? {...option, disabled: !option.disabled } : option 
      )
    }))
  }

  optionStyle = optionId => ( 
   this.state.options.filter(option => option.id === optionId)[0].disabled ?  true : false
  )
  
  render(){
    return (
      <div>
        <p className="xs-l-gray">SELECT YOUR PROTEIN OPTIONS</p>
        <TypeOfFoodButtonChange optionId={1} optionStyle={ this.optionStyle(1) } onClick={() => this.handleClick(1)}/>
        <TypeOfFoodButtonChange optionId={2} optionStyle={ this.optionStyle(2) } onClick={() => this.handleClick(2)}/>
        <TypeOfFoodButtonChange optionId={3} optionStyle={ this.optionStyle(3) } onClick={() => this.handleClick(3)}/>
        <TypeOfFoodButtonChange optionId={4} optionStyle={ this.optionStyle(4) } onClick={() => this.handleClick(4)}/>
        <TypeOfFoodButtonChange optionId={5} optionStyle={ this.optionStyle(5) } onClick={() => this.handleClick(5)}/>
      </div>
    );
  }
}

export default TypeOfFoodOptions;
