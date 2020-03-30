import React from "react"
import "./ProgressDots.css"
import { withDashboard } from "./../Dashboard"

class ProgressDots extends React.Component {
  render() {
    const { progressDots } = this.props
    return (
      <>
        <div>
          <p className="dashboardTop__text-info">YOUR 12 WEEK PROGRESS</p>
          <div className="ProgressDots__items">
            {progressDots.data.map(dot => (
              <div className="ProgressDots__item" key={dot.weekNumber}>
                <div
                  className={
                    dot.done
                      ? "ProgressDots__item--past"
                      : "ProgressDots__item--feature"
                  }
                ></div>
                {dot.current && (
                  <div className="ProgressDots__item--current"></div>
                )}
                <div
                  className={
                    dot.done
                      ? "ProgressDots__item-line--past"
                      : "ProgressDots__item-line--feature"
                  }
                ></div>
                <p className="dashboardTop__text-info">{dot.weekNumber}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default withDashboard(ProgressDots)
