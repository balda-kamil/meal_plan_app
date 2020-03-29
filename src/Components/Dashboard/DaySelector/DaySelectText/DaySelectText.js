import React from 'react';
import './DaySelectText.css'
import { withDashboard } from './../../Dashboard'

function DaySelectText(props) {
  const { number, text }  = props
  return (
    <div>
      <p className="dashboard__daySelectText">{text} { number }</p>
    </div>
  );
}

export default withDashboard(DaySelectText);
