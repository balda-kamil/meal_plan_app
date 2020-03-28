import React, { Component } from 'react';
import './TypeOfFoodOptions.css'
import TypeOfFoodButtonChange from './TypeOfFoodButtonChange'
import { withDashboard } from './../Dashboard'

class TypeOfFoodOptions extends Component {
  render(){
    const { handleOptionFoodClick, optionStyle } = this.props
    return (
      <div>
        <p className="xs-l-gray">SELECT YOUR PROTEIN OPTIONS</p>
        <TypeOfFoodButtonChange optionId={1} optionStyle={ optionStyle(1) } onClick={() => handleOptionFoodClick(1)}/>
        <TypeOfFoodButtonChange optionId={2} optionStyle={ optionStyle(2) } onClick={() => handleOptionFoodClick(2)}/>
        <TypeOfFoodButtonChange optionId={3} optionStyle={ optionStyle(3) } onClick={() => handleOptionFoodClick(3)}/>
        <TypeOfFoodButtonChange optionId={4} optionStyle={ optionStyle(4) } onClick={() => handleOptionFoodClick(4)}/>
        <TypeOfFoodButtonChange optionId={5} optionStyle={ optionStyle(5) } onClick={() => handleOptionFoodClick(5)}/>
      </div>
    );
  }
}

export default withDashboard(TypeOfFoodOptions);
