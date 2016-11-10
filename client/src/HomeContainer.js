import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log('Testing')
	}

	render() {
		return (
			<div>
				Test
			</div>
		)
	}
} 


export default HomeContainer
