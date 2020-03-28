import React from 'react'

function DietPlanColumnPrint(props){
  let backgroundStyle = { 
    backgroundImage: 'url(' + `${process.env.PUBLIC_URL}` + '/img/plan_background_bottom_corner.png)',
    backgroundSize: "cover",
  }
    return(
    <div style={backgroundStyle} className="plan__item-print">
      Print
    </div>
  )
}

export default DietPlanColumnPrint