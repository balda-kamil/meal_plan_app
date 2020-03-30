import React from "react"

function DietPlanColumnPrint() {
  const printPage = () => {
    window.print()
  }

  let backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/plan_background_bottom_corner.png)`
  }
  return (
    <div
      style={backgroundStyle}
      className="plan__item-print"
      onClick={printPage}
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/printer_ico.svg`}
        alt="printer"
        className="p-13"
      />
      <p className="color-a2a2a2">Print</p>
    </div>
  )
}

export default DietPlanColumnPrint
