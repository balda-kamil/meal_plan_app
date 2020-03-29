import React from 'react'

function Workout(props){

    return(
    <div className="plan__workout" onClick={props.onClick}>
      { props.workoutIsDone ? (
        <>
          <img src={`${process.env.PUBLIC_URL}/img/barbells_ico_orange.png`} alt="workout"/>
          <img src={`${process.env.PUBLIC_URL}/img/check_ico.svg`} alt="checked"/>
        </>
      ) : (
        <>
          <img src={`${process.env.PUBLIC_URL}/img/barbells_ico_gray.png`} alt="workout"/>
        </>
      ) }
    </div>
  )
}

export default Workout