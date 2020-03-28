import React from 'react'
import './DayColumn.css'
import DayNumber from './DayNumber/DayNumber'
import DietPlanColumnItem from './DietPlanColumnItem/DietPlanColumnItem'

function DayColumn(props){
  const { id, name, meal6am, meal9am, meal12pm, meal3pm, meal6pm, current, carb, workoutIsDone, isFree } = props
    return(
    <div className={ current ? "dashboard__dietColumn-active" : null}>
      <DayNumber id={id} name={name} current={current}/>
      <DietPlanColumnItem data={meal6am} current={current}/>
      <DietPlanColumnItem data={meal9am} current={current}/>
      <DietPlanColumnItem data={meal12pm} current={current}/>
      <DietPlanColumnItem data={meal3pm} current={current}/>
      <DietPlanColumnItem data={meal6pm} current={current}/>

      {/* <DietPlanColumnCarboAndWorkout/> */}
    </div>
  )
}

export default DayColumn