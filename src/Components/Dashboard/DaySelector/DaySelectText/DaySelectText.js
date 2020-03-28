import React from 'react';
import './DaySelectText.css'
import { withDashboard } from './../../Dashboard'

function DaySelectText(props) {
  const { selectedWeek }  = props
  return (
    <div>
      <p className="dashboard__daySelectText">Week { selectedWeek }</p>
    </div>
  );
}

export default withDashboard(DaySelectText);
