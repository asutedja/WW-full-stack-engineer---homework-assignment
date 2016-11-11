import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, hashHistory, IndexRoute, Redirect, DefaultRoute } from 'react-router'
import LoginContainer from './LoginContainer.js'
import LoggedInContainer from './LoggedinContainer.js'


var Routes = (
  <Router history={hashHistory}>
    <DefaultRoute path="/?state=:state&code=:code" component={LoginContainer}/>
    <Route path="/main" component={LoggedInContainer}/>
  </Router>
)


export default Routes