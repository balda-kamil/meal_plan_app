import React from 'react';
import './DaySelect.css'
import DaySelectButton from './DaySelectButton/DaySelectButton'
import DaySelectText from './DaySelectText/DaySelectText'

function DaySelect() {
  return (
    <div className="dashboard__day-select">
      <DaySelectButton type="left" value={-1}/>
      <DaySelectText />
      <DaySelectButton type="right" value={1}/>
    </div>
  );
}

export default DaySelect;
