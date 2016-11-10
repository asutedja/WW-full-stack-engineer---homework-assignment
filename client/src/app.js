import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Routes from './routes.js'

  // const reducers = combineReducers({
  // })

  // const store = createStore(reducers);
  const store = {};

  render(Routes,document.getElementById('app')
  );