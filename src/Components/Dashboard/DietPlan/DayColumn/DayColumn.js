import React from 'react'
import './DayColumn.css'
import DayNumber from './DayNumber/DayNumber'
import DietPlanColumnItem from './DietPlanColumnItem/DietPlanColumnItem'
import DietPlanColumnCarboAndWorkout from './DietPlanColumnCarboAndWorkout/DietPlanColumnCarboAndWorkout'
import { withDashboard } from './../../Dashboard'

function DayColumn(props){
  const { id, name, meal6am, meal9am, meal12pm, meal3pm, meal6pm, current, carb, workoutIsDone, handleMealDone, handleWorkoutDone, mobile } = props
  const styleActive = {
    boxShadow: "0 0 0 2px #ff801a",
    zIndex: "10",
    fontWeight: "bold",
    color: "#000"
  }
    return(
    <div style={ current ? styleActive : null } className={ mobile ? "dashboard__dietColumn mobile" : "dashboard__dietColumn"}>
      <DayNumber id={id} name={name} current={current}/>
      <DietPlanColumnItem data={meal6am} current={current} onClick={() => handleMealDone(meal6am.id)}/>
      <DietPlanColumnItem data={meal9am} current={current} onClick={() => handleMealDone(meal9am.id)}/>
      <DietPlanColumnItem data={meal12pm} current={current} onClick={() => handleMealDone(meal12pm.id)}/>
      <DietPlanColumnItem data={meal3pm} current={current} onClick={() => handleMealDone(meal3pm.id)}/>
      <DietPlanColumnItem data={meal6pm} current={current} onClick={() => handleMealDone(meal6pm.id)}/>
      <DietPlanColumnCarboAndWorkout carb={carb} workoutIsDone={workoutIsDone} id={id} onClick={() => handleWorkoutDone(id)}/>
    </div>
  )
}

export default withDashboard(DayColumn)