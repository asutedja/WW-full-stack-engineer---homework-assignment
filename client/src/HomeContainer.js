import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import {authorize} from '../../helper.js'
import { connect } from 'react-redux'
import * as userActions from '../Redux/userReducer'

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(window.location.href.length > 24) {
			this.loggedIn();
		} else {
			console.log(this.context.router)
			this.login();
		}
	}

	render() {
		return (
			<div>

			</div>
		)
	}
} 


function mapStateToProps(state) {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(HomeContainer)
