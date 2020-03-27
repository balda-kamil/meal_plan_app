import React from 'react';
import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import ProgressDots from './ProgressDots/ProgressDots'
import TimeChanger from './TimeChanger/TimeChanger'
import TypeOfFoodOptions from './TypeOfFoodOptions/TypeOfFoodOptions'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className="app__main__content-wrapper">
        <div className="dashboardTop">
          <ProgressDots />
          <TimeChanger />
          <TypeOfFoodOptions />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Dashboard;
