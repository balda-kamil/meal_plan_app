import React from 'react'
import Carb from './Carb'
import Workout from './Workout'

function DietPlanColumnCarboAndWorkout(props){
  let backgroundStyle = { 
    backgroundImage: 'url(' + `${process.env.PUBLIC_URL}` + '/img/plan_background_bottom.png)',
    backgroundSize: "cover",
  }
  console.log(props)
    return(
    <div style={backgroundStyle}>
      <Carb carb={props.carb}/>
      <Workout workoutIsDone={props.workoutIsDone}/>
    </div>
  )
}

export default DietPlanColumnCarboAndWorkout