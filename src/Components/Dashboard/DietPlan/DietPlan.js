import React from 'react';
import './DietPlan.css'
import FirstColumn from './FirstColumn/FirstColumn'
import DayColumn from './DayColumn/DayColumn'

import { withDashboard } from './../Dashboard'

function DietPlan(props){
  const { days } = props 
  console.log(days)
  return(
    <div className="dashboard__dietPlan-container">
      <FirstColumn/>
      <DayColumn/>
      <DayColumn/>
      <DayColumn/>
      <DayColumn/>
      <DayColumn/>
      <DayColumn/>
      <DayColumn/>
    </div>
  )
}

export default withDashboard(DietPlan);
