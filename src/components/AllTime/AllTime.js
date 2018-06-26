import React from "react";

const allTime = (props) => {
	let leaders = [];
	for (let i = 0; i < props.campers.length; ++i) {
		leaders.push(
			<tr key = {props.campers[i].username} style = {i % 2 == 0 ? {backgroundColor: "#ccc"} : {backgroundColor: "white"}}>
				<td>{i + 1}</td>
				<td><img src = {props.campers[i].img} alt = "" style = {{width: "50px"}}/></td>
				<td>{props.campers[i].username}</td>
				<td>{props.campers[i].recent}</td>
				<td>{props.campers[i].alltime}</td>
			</tr>
		);
	}
	return(
		<div>
			<h2 style = {{backgroundColor: "green", color: "white"}}>Top Camper's: All Time</h2>
			<table style = {{backgroundColor: "white", color: "black", width: "100%"}}>
				<thead>
					<tr>
						<th>Rank</th>
						<th></th>
						<th>Username</th>
						<th>Recent Points</th>
						<th>Total Points</th>
					</tr>
				</thead>
				<tbody>
					{leaders}
				</tbody>
			</table>
		</div>
	);
};

export default allTime;