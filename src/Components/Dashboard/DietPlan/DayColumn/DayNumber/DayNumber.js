import React from "react"
import { withDashboard } from "./../../../Dashboard"

function DayNumber(props) {
  return (
    <div className="column__day">
      <p>{props.windowWidth > 991 ? props.name : "MEAL"}</p>
    </div>
  )
}

export default withDashboard(DayNumber)
