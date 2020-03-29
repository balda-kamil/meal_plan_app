import React from 'react';
import './DietPlan.css'
import FirstColumn from './FirstColumn/FirstColumn'
import DayColumn from './DayColumn/DayColumn'
import DayColumnFree from './DayColumnFree/DayColumnFree'
import { withDashboard } from './../Dashboard'

function DietPlan(props){
  const { days, windowWidth, selectedDay } = props 
  console.log(props)
  return(
    <div className="dashboard__dietPlan-container">
      <FirstColumn/>
      { windowWidth > 991 ? (
        days && 
        days.map( day => ( day.isFree ? (
              <DayColumnFree name={day.name} key={day.id}/>
                ) : (
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
                  />
                )
              ))
        ) : (
        days && 
        days.filter(day => day.id === selectedDay)
            .map(day => day.isFree ? (
              <DayColumnFree mobile={true} name={day.name} key={day.id}/>
                ) : ( 
                  <DayColumn 
                    mobile={true}
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
                  />
                )  
          ))
      }
    </div>
  )
}

export default withDashboard(DietPlan);
