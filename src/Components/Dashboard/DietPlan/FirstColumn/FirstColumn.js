import React from 'react'
import './FirstColumn.css'

function FirstColumn(){
  let backgroundStyle = { 
    backgroundImage: 'url(' + `${process.env.PUBLIC_URL}` + '/img/plan_background_left.png)',
    backgroundSize: "cover",
    }
  return(
    <div className="dashboard__diet-plan_first-column" style={ backgroundStyle }>
      <div className="column__day"/>
      <div className="plan__item plan__hour">
        <span className="text-bold">6:00</span> AM
      </div>
      <div className="plan__item plan__hour">
        <span className="text-bold">9:00</span> AM
      </div>
      <div className="plan__item plan__hour">
        <span className="text-bold">12:00</span> PM
      </div>
      <div className="plan__item plan__hour">
        <span className="text-bold">3:00</span> PM
      </div>
      <div className="plan__item plan__hour">
        <span className="text-bold">6:00</span> PM
      </div>
      <div className="plan__carb"></div>
      <div className="plan__workout">
        <p>Workout</p>
        <img src={`${process.env.PUBLIC_URL}/img/Rectangle_small.png`} alt="small rectangle" className="plan__workout-little_arrow"/>
      </div>
    </div>
  )
}

export default FirstColumn