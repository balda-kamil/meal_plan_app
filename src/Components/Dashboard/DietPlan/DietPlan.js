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

      { days && days.map( day => 
        <DayColumn 
          key={day.id}
          id={day.id}
          name={day.name}
        />) }
    </div>
  )
}

export default withDashboard(DietPlan);
