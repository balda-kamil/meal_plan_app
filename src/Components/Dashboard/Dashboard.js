import React from 'react';
import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import DashboardTop from './DashboardTop/DashboardTop'

function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className="app__main__content-wrapper">
        <DashboardTop/>
          dashboard
        <Footer/>
      </div>
    </>
  );
}

export default Dashboard;
