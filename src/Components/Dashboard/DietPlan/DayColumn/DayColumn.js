import React from 'react'
import './DayColumn.css'
import DayNumber from './DayNumber/DayNumber'

function DayColumn(props){
  const { id, name } = props
  console.log(props)
  return(
    <div>
      <DayNumber id={id} name={name} />
      {/* <DietPlanColumnItem/>
      <DietPlanColumnItem/>
      <DietPlanColumnItem/>
      <DietPlanColumnItem/>
      <DietPlanColumnItem/>
      <DietPlanColumnItem/>
      <DietPlanColumnCarboAndWorkout/> */}
    </div>
  )
}

export default DayColumn