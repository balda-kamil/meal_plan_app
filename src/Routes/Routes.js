import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../Components/Dashboard/Dashboard'
import Recipes from './../Components/Recipes/Recipies'
import Challenge from './../Components/Challenge/Challenge'

function Routes(){
  return(
    <>
      <Route exact path="/" component={ Dashboard } />
      <Route exact path="/recipies" component={ Recipes } />
      <Route exact path="/challenge" component={ Challenge } />
    </>
  )
}

export default Routes