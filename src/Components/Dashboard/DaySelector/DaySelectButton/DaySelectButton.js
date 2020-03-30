import React from "react"
import "./DaySelectButton.css"
import { withDashboard } from "./../../Dashboard"

function DaySelectButton(props) {
  const { type, handleDayChange, value } = props
  return (
    <button
      className="dashboard__time-select__button"
      onClick={() => handleDayChange(value)}
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/arrow_${type}_big.svg`}
        alt={`arrow ${type}`}
      />
    </button>
  )
}

export default withDashboard(DaySelectButton)
