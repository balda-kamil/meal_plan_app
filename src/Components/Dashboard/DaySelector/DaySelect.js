import React from 'react';
import './DaySelect.css'
import DaySelectButton from './DaySelectButton/DaySelectButton'
import DaySelectText from './DaySelectText/DaySelectText'
import WeekSelectButton from './WeekSelectButton/WeekSelectButton'

import { withDashboard } from './../Dashboard'  

function DaySelect(props) {
  const { windowWidth, selectedDay, selectedWeek } = props
  console.log(props)
  return (
    <div className="dashboard__day-select">
      { windowWidth > 991 ? (
        <>
          <WeekSelectButton type="left" value={-1}/>
          <DaySelectText text="Week" number={selectedWeek}/>
          <WeekSelectButton type="right" value={1}/>
        </>
      ) : (
        <>
          <DaySelectButton type="left" value={-1}/>
          <DaySelectText text="Day" number={selectedDay}/>
          <DaySelectButton type="right" value={1}/>
        </>
      ) }
    </div>
    )
}

export default withDashboard(DaySelect);
