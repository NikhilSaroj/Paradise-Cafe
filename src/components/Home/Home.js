/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './Menu'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Promotions from './Promotions'
import './CSS/Home.css'
// import Routes from './Routes'

class Home extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isClicked: false
		}
		this.ourStory = this.ourStory.bind(this)
	}

	ourStory() {
		// console.log('Click');
		this.setState({
			isClicked: true
		})
	}

	render() {
		return (
			<div className="home">
				<Header ourStory={this.ourStory} />
				<Banner val={this.state.isClicked} />
				<Promotions val={this.state.isClicked} />
				<Footer />
			</div>
		)
	}
}

export default Home
