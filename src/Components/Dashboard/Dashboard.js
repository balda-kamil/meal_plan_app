import React from 'react';
import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import ProgressDots from './ProgressDots/ProgressDots'
import TimeChanger from './TimeChanger/TimeChanger'
import TypeOfFoodOptions from './TypeOfFoodOptions/TypeOfFoodOptions'
import './Dashboard.css'

import progressDotsJSON from './progress_dots_data.json'

const DashboardContext = React.createContext()
export const DashboardConsumer = DashboardContext.Consumer

class Dashboard extends React.Component {
  state = {
    progressDots: progressDotsJSON,
  }
  render(){
    return (
      <>
        <Navbar/>
        <div className="app__main__content-wrapper">
          <div className="dashboardTop">
            <DashboardContext.Provider value={ this.state }>
              <ProgressDots />

            </DashboardContext.Provider>
            <TimeChanger />
            <TypeOfFoodOptions />
          </div>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Dashboard;

export function withDashboard(Component){
  function DashboardAwareComponent(props) {
  return <DashboardConsumer>{ state => <Component {...props} {...state} />}</DashboardConsumer>
  }
  DashboardAwareComponent.displayName = `DashboardAware(${Component.displayName
    || Component.name
    || 'Component'})`
  return DashboardAwareComponent
}
