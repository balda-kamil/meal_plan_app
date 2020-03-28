import React from 'react';
import './DaySelectButton.css'
import { withDashboard } from './../../Dashboard'

function DaySelectButton(props) {
  const { type, handleWeekChange, value } = props
  return (
    <button className="dashboard__day-select__button" onClick={ () => handleWeekChange(value) }>
      <img src={`${process.env.PUBLIC_URL}/img/arrow_${type}_big.svg`} alt={`arrow ${type}`} />
    </button>
  );
}

export default withDashboard(DaySelectButton);
