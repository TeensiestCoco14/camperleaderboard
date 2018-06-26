import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {Route, NavLink} from "react-router-dom";
import Recent from "./components/Recent/Recent";
import AllTime from "./components/AllTime/AllTime"

class App extends Component {
	
	state = {
		recentCampers: [],
		longCampers: []
	};

	componentDidMount = () => {
		axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
			.then(response => {
				this.setState({recentCampers: response.data});
			});
		axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
			.then(response => {
				this.setState({longCampers: response.data});
			});
	}
	
	render() {
		return (
			<div className="App" style = {{backgroundColor: "green", color: "white"}}>
				<NavLink to = "/" style = {{textDecoration: "none", color: "black", margin: "20px"}}>Recent</NavLink>
				<NavLink to = "/alltime" style = {{textDecoration: "none", color: "black", margin: "20px"}}>All Time</NavLink>
				<header style = {{backgroundColor: "green", color: "white"}}>
					<h1>Camper Leader Board</h1>
				</header>
				<Route path = "/" exact render = {() => <Recent campers = {this.state.recentCampers}/>}/>
				<Route path = "/alltime" render = {() => <AllTime campers = {this.state.longCampers}/>}/>
			</div>
		);
	}
}

export default App;
