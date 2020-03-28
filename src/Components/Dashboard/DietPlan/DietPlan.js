import React from 'react';
import './DietPlan.css'
import FirstColumn from './FirstColumn/FirstColumn'
import DayColumn from './DayColumn/DayColumn'

import { withDashboard } from './../Dashboard'

function DietPlan(props){
  const { days } = props 
  return(
    <div className="dashboard__dietPlan-container">
      <FirstColumn/>

      { days && days.map( day => 
        <DayColumn 
          key={day.id}
          id={day.id}
          name={day.name}
          meal6am={day.meal6am}
          meal9am={day.meal9am}
          meal12pm={day.meal12pm}
          meal3pm={day.meal3pm}
          meal6pm={day.meal6pm}
          current={day.current}
          carb={day.carb}
          workoutIsDone={day.workoutIsDone}
          isFree={day.isFree}
        />) }
    </div>
  )
}

export default withDashboard(DietPlan);
