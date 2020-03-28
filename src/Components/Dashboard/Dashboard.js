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
    typeOfFoodOptions: [
      { 
        id: 1,
        disabled: true 
      },
      { 
        id: 2,
        disabled: true 
      },
      { 
        id: 3,
        disabled: true 
      },
      { 
        id: 4,
        disabled: false
       },
      { 
        id: 5,
        disabled: false
       }
    ],

    handleOptionFoodClick: optionId => {
      this.setState(prevState => ({
        typeOfFoodOptions: prevState.typeOfFoodOptions.map(
          option => option.id === optionId ? {...option, disabled: !option.disabled } : option 
        )
      }))
      const { typeOfFoodOptions } = this.state
      localStorage.setItem('TypeOfFoodOptionsState', JSON.stringify(typeOfFoodOptions) )
    },

    optionStyle: optionId => ( 
      this.state.typeOfFoodOptions.filter(option => option.id === optionId)[0].disabled ?  true : false
     )

  }

  componentDidUpdate = () => {
    const { typeOfFoodOptions } = this.state
    localStorage.setItem('TypeOfFoodOptionsState', JSON.stringify(typeOfFoodOptions) )
  }

  componentWillMount = () => {
    let data = JSON.parse(localStorage.getItem('TypeOfFoodOptionsState'))
    this.setState({
      typeOfFoodOptions: data
    })
  }

  render(){
    return (
      <>
        <Navbar/>
        <div className="app__main__content-wrapper">
          <div className="dashboardTop">
            <DashboardContext.Provider value={ this.state }>
              <ProgressDots />
              <TimeChanger />
              <TypeOfFoodOptions />
            </DashboardContext.Provider>
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
