import React from 'react'
import Carb from './Carb'
import Workout from './Workout'

function DietPlanColumnCarboAndWorkout(){
  let backgroundStyle = { 
    backgroundImage: 'url(' + `${process.env.PUBLIC_URL}` + '/img/plan_background_bottom.png)',
    backgroundSize: "cover",
  }
    return(
    <div style={backgroundStyle}>
      <Carb/>
      <Workout/>
    </div>
  )
}

export default DietPlanColumnCarboAndWorkout