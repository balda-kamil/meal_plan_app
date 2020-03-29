import React from 'react'
import Carb from './Carb'
import Workout from './Workout'
import { withDashboard } from './../../../Dashboard'

function DietPlanColumnCarboAndWorkout(props){
  let { handleWorkoutDone, id } = props
  let backgroundStyle = { 
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/plan_background_bottom.png)`
  }
  return(
    <div style={backgroundStyle}>
      <Carb carb={props.carb}/>
      <Workout workoutIsDone={props.workoutIsDone} onClick={() => handleWorkoutDone(id)}/>
    </div>
  )
}

export default withDashboard(DietPlanColumnCarboAndWorkout)