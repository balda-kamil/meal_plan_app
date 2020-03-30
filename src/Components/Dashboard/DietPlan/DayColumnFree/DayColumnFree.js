import React from "react"
import DayNumber from "./../DayColumn/DayNumber/DayNumber"
import DietPlanColumnPrint from "./DietPlanColumnPrint"

function DayColumnFree(props) {
  const { id, name, current } = props
  return (
    <div
      className={
        current
          ? "dashboard__dietColumn dashboard__dietColumn-active"
          : "dashboard__dietColumn"
      }
    >
      <DayNumber id={id} name={name} current={current} />
      <div className="column__item-free_day">
        <p>guilt-free day</p>
        <img
          src={`${process.env.PUBLIC_URL}/img/Happy_ico.svg`}
          alt="happy face"
        />
      </div>
      <DietPlanColumnPrint />
    </div>
  )
}

export default DayColumnFree
