import React from 'react';
import { withDashboard } from './../../Dashboard'

function WeekSelectButton(props) {
  const { type, handleWeekChange, value } = props
  return (
    <button className="dashboard__time-select__button" onClick={() => handleWeekChange(value)}>
      <img src={`${process.env.PUBLIC_URL}/img/arrow_${type}_big.svg`} alt={`arrow ${type}`} />
    </button>
  );
}

export default withDashboard(WeekSelectButton);
