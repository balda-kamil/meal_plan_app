import React from 'react';
import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import ProgressDots from './ProgressDots/ProgressDots'
import DaySelect from './DaySelector/DaySelect'
import TypeOfFoodOptions from './TypeOfFoodOptions/TypeOfFoodOptions'
import DietPlan from './DietPlan/DietPlan'
import './Dashboard.css'

import progressDotsJSON from './progress_dots_data.json'

const DashboardContext = React.createContext()
export const DashboardConsumer = DashboardContext.Consumer

class Dashboard extends React.Component {
  state = {
    progressDots: progressDotsJSON,
    selectedWeek: 7,
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
     ),

    handleWeekChange: value => {
      this.setState(prevState => ({
        selectedWeek: Math.max(Math.min(prevState.selectedWeek + value, 52), 1)
      }))
     }
  }

  componentDidUpdate = () => {
    const { typeOfFoodOptions, selectedWeek } = this.state
    localStorage.setItem('TypeOfFoodOptionsState', JSON.stringify(typeOfFoodOptions))
    localStorage.setItem('SelectedWeekState', JSON.stringify(selectedWeek))
  }

  componentWillMount = () => {
    let typeOfFoodOptionsState = JSON.parse(localStorage.getItem('TypeOfFoodOptionsState'))
    let SelectedWeekState = JSON.parse(localStorage.getItem('SelectedWeekState'))
    this.setState({
      typeOfFoodOptions: typeOfFoodOptionsState,
      selectedWeek: SelectedWeekState
    })
  }

  componentDidMount = () => {
    fetch(`${process.env.PUBLIC_URL}/data/days.json`)
      .then(res => res.json())
      .then(days =>
        this.setState({
          days,
        }))
      .catch(err => err.message)
  }

  render(){
    return (
      <>
        <Navbar/>
        <div className="app__main__content-wrapper">
          <DashboardContext.Provider value={ this.state }>
            <div className="dashboardTop">
              <ProgressDots />
              <DaySelect />
              <TypeOfFoodOptions />
            </div>
            <DietPlan/>
          </DashboardContext.Provider>
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
