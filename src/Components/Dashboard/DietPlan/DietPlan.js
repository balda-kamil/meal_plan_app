import React from 'react';
import './DietPlan.css'
import FirstColumn from './FirstColumn/FirstColumn'
import DayColumn from './DayColumn/DayColumn'

function DietPlan(){
  return(
    <div className="dashboard__dietPlan-container">
      <FirstColumn/>
      <DayColumn/>
    </div>
  )
}

export default DietPlan;
