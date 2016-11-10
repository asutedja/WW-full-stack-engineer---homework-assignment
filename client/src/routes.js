import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './HomeContainer.js'


var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={HomeContainer}>
    </Route>
  </Router>
)


export default Routes