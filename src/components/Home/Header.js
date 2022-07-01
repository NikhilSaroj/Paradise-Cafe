import React from 'react'
import './CSS/header.css'
import { useHistory } from 'react-router'
import Logo from './images/cafeLogo.jpg'

function Header(props) {

	let history = useHistory();

	const routeToMenuPage = () => {
		// console.log('heelo')
		history.push("/menu");
	}

	const routeToHomePage = () => {
		// console.log('heelo')
		history.push("/");
	}

	const routeToAboutCafePage = () => {
		// console.log('heelo')
		history.push("/AboutCafe");
	}

	const routeToAboutContactUs = () => {
		// console.log('heelo')
		history.push("/ContactUs");
	}

	return (
		<div className="header">
			{/* <img className="cafe-logo" src={Logo} alt={"Cafe Logo"}/> */}
			<button className="cafe-logo" onClick={routeToHomePage}/>
			<button id="login">Cart</button>
			<button id="signUp">Login/SignUp</button>
			<p className="header">Welcome to paradise cafe</p>
			<div className="opt-buttons">
				<button id="our_menu" onClick={routeToMenuPage}>Our Menu</button>
				{/* <button id="our_story" onClick={() => props.ourStory()}>Our Story</button> */}
				<button id="our_story" onClick={routeToAboutCafePage}>Our Story</button>				
				<button id="contact_us" onClick={routeToAboutContactUs}>Contact US</button>
			</div>
		</div>
	)
}

export default Header

