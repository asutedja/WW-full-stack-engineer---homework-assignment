import React, {PropTypes} from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import {authorize} from '../../helper.js'
import settings from '../../settings.js'
import { connect } from 'react-redux'
import * as userActions from '../Redux/userReducer'

class LoginContainer extends React.Component {
	constructor(props,context) {
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

	login() {
		//TODO Random string generator
		const string = Math.random().toString(36).replace(/[^a-z]+/g, '');
		settings.state = string;
		authorize(string);
	}

	loggedIn() {
		this.context.router.push('/main')
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

LoginContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(LoginContainer)
