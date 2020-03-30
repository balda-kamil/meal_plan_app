import React from "react"
import Navbar from "./../Navbar/Navbar"
import Footer from "./../Footer/Footer"
import ProgressDots from "./ProgressDots/ProgressDots"
import DaySelect from "./DaySelector/DaySelect"
import TypeOfFoodOptions from "./TypeOfFoodOptions/TypeOfFoodOptions"
import DietPlan from "./DietPlan/DietPlan"
import "./Dashboard.css"

import progressDotsJSON from "./progress_dots_data.json"

const DashboardContext = React.createContext()
export const DashboardConsumer = DashboardContext.Consumer

const toggleMeal = (meal, id) =>
  meal.id === id
    ? {
        ...meal,
        done: !meal.done
      }
    : meal
class Dashboard extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    progressDots: progressDotsJSON,
    selectedWeek: 7,
    selectedDay: 65,
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
        typeOfFoodOptions: prevState.typeOfFoodOptions.map(option =>
          option.id === optionId
            ? { ...option, disabled: !option.disabled }
            : option
        )
      }))
      const { typeOfFoodOptions } = this.state
      localStorage.setItem(
        "TypeOfFoodOptionsState",
        JSON.stringify(typeOfFoodOptions)
      )
    },

    optionStyle: optionId =>
      this.state.typeOfFoodOptions.filter(option => option.id === optionId)[0]
        .disabled
        ? true
        : false,

    handleWeekChange: value => {
      console.log("cost tm")
      this.setState(prevState => ({
        selectedWeek: Math.max(Math.min(prevState.selectedWeek + value, 52), 1)
      }))
    },

    handleDayChange: value => {
      this.setState(prevState => ({
        selectedDay: Math.max(Math.min(prevState.selectedDay + value, 70), 64)
      }))
    },

    handleWorkoutDone: id => {
      this.setState(prevState => ({
        days: prevState.days.map(day =>
          day.id === id
            ? {
                ...day,
                workoutIsDone: !day.workoutIsDone
              }
            : day
        )
      }))
    },

    handleMealDone: id =>
      this.setState(prevState => ({
        days: prevState.days.map(day =>
          !day.isFree
            ? {
                ...day,
                meal6am: toggleMeal(day.meal6am, id),
                meal9am: toggleMeal(day.meal9am, id),
                meal12pm: toggleMeal(day.meal12pm, id),
                meal3pm: toggleMeal(day.meal3pm, id),
                meal6pm: toggleMeal(day.meal6pm, id)
              }
            : {
                ...day
              }
        )
      }))
  }

  componentDidUpdate = () => {
    const { typeOfFoodOptions, selectedWeek, selectedDay, days } = this.state
    localStorage.setItem(
      "TypeOfFoodOptionsState",
      JSON.stringify(typeOfFoodOptions)
    )
    localStorage.setItem("SelectedWeekState", JSON.stringify(selectedWeek))
    localStorage.setItem("SelectedDayState", JSON.stringify(selectedDay))
    localStorage.setItem("DaysDataState", JSON.stringify(days))
  }

  componentDidMount = () => {
    let typeOfFoodOptionsState = JSON.parse(
      localStorage.getItem("TypeOfFoodOptionsState")
    )
    let SelectedWeekState = JSON.parse(
      localStorage.getItem("SelectedWeekState")
    )
    let SelectedDayState = JSON.parse(localStorage.getItem("SelectedDayState"))
    let DaysDataState = JSON.parse(localStorage.getItem("DaysDataState"))

    typeOfFoodOptionsState !== null &&
      this.setState({
        typeOfFoodOptions: typeOfFoodOptionsState
      })

    SelectedWeekState !== null &&
      this.setState({
        selectedWeek: SelectedWeekState
      })

    SelectedDayState !== null &&
      this.setState({
        selectedDay: SelectedDayState
      })

    DaysDataState
      ? this.setState({
          days: DaysDataState
        })
      : fetch(`${process.env.PUBLIC_URL}/data/days.json`)
          .then(res => res.json())
          .then(days =>
            this.setState({
              days
            })
          )
          .catch(err => err.message)

    window.addEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="app__main__content-wrapper">
          <DashboardContext.Provider value={this.state}>
            <div className="dashboardTop">
              <ProgressDots />
              <DaySelect />
              <TypeOfFoodOptions />
            </div>
            <DietPlan />
          </DashboardContext.Provider>
          <Footer />
        </div>
      </>
    )
  }
}

export default Dashboard

export function withDashboard(Component) {
  function DashboardAwareComponent(props) {
    return (
      <DashboardConsumer>
        {state => <Component {...props} {...state} />}
      </DashboardConsumer>
    )
  }
  DashboardAwareComponent.displayName = `DashboardAware(${Component.displayName ||
    Component.name ||
    "Component"})`
  return DashboardAwareComponent
}
