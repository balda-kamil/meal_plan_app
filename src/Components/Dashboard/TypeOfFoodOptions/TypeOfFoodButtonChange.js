import React from 'react';

function TypeOfFoodButtonChange(props){
  console.log(props)
    return (
      <button onClick={props.onClick} className="TypeOfFoodChangeButton">
        <img 
          src={ props.optionStyle ? `${process.env.PUBLIC_URL}/img/option_${props.optionId}.png` : `${process.env.PUBLIC_URL}/img/option_${props.optionId}_disabled.png` } 
          alt={`option ${props.optionId}` }
        />
      </button>
    );
  }

export default TypeOfFoodButtonChange;
