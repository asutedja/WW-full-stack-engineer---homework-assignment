import React, {PropTypes} from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import {authorize, token} from '../../helper.js'
import { connect } from 'react-redux'
import * as userActions from '../Redux/userReducer'

class LoggedInContainer extends React.Component {
	constructor(props, context) {
		super(props);
	}

	componentWillMount() {
		console.log(this.context.router);
		// token()
	}

	login() {
		const string = Math.random().toString(36).replace(/[^a-z]+/g, '');
		authorize(string);
	}

	render() {
		return (
			<div>
				LOGGEDIN
			</div>
		)
	}
}
 
function mapStateToProps(state) {
  return {
    isLoggedIn: state.userReducer.isLoggedIn
  }
}

LoggedInContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(LoggedInContainer)
